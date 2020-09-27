function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2)
  car.velocityX = speed;
  speed=random(55,90)
  weight=random(400,1500)
  
}
var car,wall;
var speed,weight;
function draw() {
  background(255,255,255);
  
  if(wall.x-car.x)






















  drawSprites();
}