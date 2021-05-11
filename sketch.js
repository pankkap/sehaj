var player;
var score = 0;
var wormGroup;

function preload() {
  swampImage = loadImage("/images/1.jpg");
  wormImage = loadImage("/images/2.png");
  playerImage = loadImage("/images/3.png");
}

function setup() {
  createCanvas(600, 600);
  swamp = createSprite(300, 300);
  swamp.scale = 1.3;
  swamp.addImage(swampImage);
  // frog = createSprite(300, 300);
  // worm = createSprite(300, 300);

  player = createSprite(40, 550, 30, 30);
  player.addImage(playerImage);
  player.scale = 0.2;

  wormGroup = new Group();
}

function draw() {
  background("black");
  stroke("red");
  noFill();
  ellipse(100, 350, 40, 30);
  player.x = mouseX;
  player.y = mouseY;

  if (player.x < 150 && player.x > 90 && player.y < 380 && player.y > 320) {
    text("NO CHEATING!!", 200, 200);
    player.x = 30;
    player.y = 30;
  }
  generateWorms();

  for (var i = 0; i < wormGroup.length; i++) {
    var temp = wormGroup.get(i);
    if (player.isTouching(temp)) {
      score++;
      temp.destroy();
      temp = null;
    }
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: " + score, 350, 50);
}

function generateWorms() {
  if (frameCount % 30 === 0) {
    console.log(frameCount);
    var worm = createSprite(random(40, 380), random(290, 380), 40, 5);
    worm.scale = random(0.07, 0.1);
    worm.addImage(wormImage);
    worm.shapeColor = "green";
    worm.velocityX = random(-4, 4);
    worm.velocityY = random(-4, 4);
    wormGroup.add(worm);
  }
}
