var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
    background("red")  
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
    background("yellow") 
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5;
    background("green") 
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5;
    background("blue") 
  }
  drawSprites();

}




