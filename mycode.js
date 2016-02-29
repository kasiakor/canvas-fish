
void setup() { 
  size(400, 400); 
} 

background(34, 98, 115);
var centerX = 300;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;


var bodyColor = color(random(255), random(255), random(255));
var eyeColor = color(random(255), random(255), random(255));
var tailColor = color(random(255), random(255), random(255));


void draw () {
var bubbleX = random (50, 350);
var bubbleY = random (0, 80);

    noStroke();
    fill (random (bodyColor));
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);

    fill (random(tailColor));
    // tail

    var tailWidth = bodyHeight/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(random(eyeColor));
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

    // bubble
    fill (212, 190, 190);
    ellipse (bubbleX, bubbleY, 10, 10);

};
         
