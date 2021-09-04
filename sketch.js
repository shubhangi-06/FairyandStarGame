var starImg, bgImg;
var star, starBody;
var fairy, fairyImg, fairyMusic;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	bgImg = loadImage("starNight.png");
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyMusic = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800,750);

	fairyMusic.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(466,375);
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.changeAnimation("fairyFlying");
	fairy.scale = 0.3;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {
		restitution:0.5, isStatic:true
	}
	);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  dif=star.x - fairy.x;
  if(dif < 184){
	if(star.y > 330 && starBody.position.y > 330){
		Matter.Body.setStatic(starBody,true);
	}
  }else{
	if(star.y > 330 && starBody.position.y > 330){
		Matter.Body.setStatic(starBody,false);
	}
  }
  console.log(dif);

  drawSprites();


}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 16;
	}
	
	if (keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 16;
	}
}
