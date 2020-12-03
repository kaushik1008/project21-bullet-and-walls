var thickness,wall
var speed,weight,bullet

function setup() {
  createCanvas(2000,1000);
  
  bullet=createSprite(700,400,250,90)
   bullet.shapeColor="white"

thickness=random(22,83)

   
  wall=createSprite(1200,350,thickness,500);
  wall.shapeColor="blue"

  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(0); 

  bullet.velocityX=speed;
  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
 
   if(damage>10){
     wall.shapeColor="orange"
   }
   if(damage<10){
     wall.shapeColor="green"
   }
  }


  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}