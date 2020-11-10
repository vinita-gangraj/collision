var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);
  fixedRect=createSprite(600,400,100,100);
  fixedRect.shapeColor="green";
  movingRect = createSprite(400,200,100,100);
  movingRect.shapeColor="green";
  console.log(5);
  
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  console.log(movingRect.x-fixedRect.x);
    drawSprites();
}