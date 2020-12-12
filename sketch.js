
var bg,bgI


function preload()
{
  bgI = loadImage("bg2.jpg")
}

function setup() {
  createCanvas(1200,600);
   bg = createSprite(600,400,1200,800)
   bg.scale = 1.0
   bg.addImage(bgI)
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
 
}



