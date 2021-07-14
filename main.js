function preload() {}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function  draw() {
    image(video, 200, 150, 220, 200);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);
    rect(90, 428, 460, 20);
}
function takeSnapshot() {
    save("Frame-Image.png");
}