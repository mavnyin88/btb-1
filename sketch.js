// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for this video: https://youtu.be/Cl_Gjj80gPE

var yoff = 0.0;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  // createCanvas(800, 800);
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  var radius = 150;

  beginShape();
  var xoff = 0;
  stroke(random(250),random(250),random(250));
  for (var a = 0; a < TWO_PI; a += 0.001) {
    var offset = map(noise(xoff, yoff), 0, 1, -30, 30);
    var r = radius + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
    //ellipse(x, y, 4, 4);
  }
  endShape();

  yoff += 0.01;
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};
