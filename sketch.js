var bg, bgImage;

var spacecraft, spacecraftImg, iss, issAnim, hasDocked;

var spacecraft2, spacecraft3, spacecraft4;
var spacecraft2Img, spacecraft3Img, spacecraft4Img;

function preload(){
  bgImage = loadImage("assets/Docking-undocking/spacebg.jpg")
  issAnim = loadImage("assets/Docking-undocking/iss.png")
  spacecraftImg = loadImage("assets/Docking-undocking/spacecraft1.png")
  spacecraft2Img = loadImage("assets/Docking-undocking/spacecraft2.png")
  spacecraft3Img = loadImage("assets/Docking-undocking/spacecraft3.png")
  spacecraft4Img = loadImage("assets/Docking-undocking/spacecraft4.png")

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(400,200,800,400);
  bg.addImage("image", bgImage);

  hasDocked = false;

  iss = createSprite(500,150);
  iss.addImage(issAnim);
  iss.scale = 0.45;

  spacecraft = createSprite(500,300);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.2;
  
}

function draw() {
  background(0,0,0); 
  spacecraft.addImage(spacecraftImg);
  if (!hasDocked){
    if (keyDown(LEFT_ARROW)){
      
      spacecraft.x -= 5;
      spacecraft.addImage(spacecraft3Img);
  }

    if (keyDown(RIGHT_ARROW)){
      
      spacecraft.x += 5;
      spacecraft.addImage(spacecraft4Img);
}

    if (keyDown(UP_ARROW)){
      
      spacecraft.y -= 5;
      spacecraft.addImage(spacecraftImg);
}

    if (keyDown(DOWN_ARROW)){
      
      spacecraft.y += 5;
      spacecraft.addImage(spacecraft2Img);
} 
}

  if (spacecraft.y < 180 && spacecraft.x > 480 && spacecraft.x < 510){
    hasDocked = true;

      
  }
  drawSprites();

  if(hasDocked === true){
    text("You have docked successfully!", 400,350);
  }

}
