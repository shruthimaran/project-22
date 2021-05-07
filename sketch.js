var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy , fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	//load animation for fairy here
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(300, 490);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine)

  background(bgImg);
  fairy.velocityX=0
  fairy.velocityY=0
 
  if(keyDown(RIGHT_ARROW)){
	fairy.velocityX=6
}else if (keyDown(LEFT_ARROW)){
	fairy.velocityX=-6
}else if (keyDown(DOWN_ARROW)){
	star.velocityY=3
}

if(star.y>470){
	star.velocityY=0
}

  drawSprites();

}


