status="";

function preload()
{
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    status = true;
    console.log("Model Loaded!");
    video.loop();
    video.speed(1);
    video.volume(1);
}

function draw() 
{ 
    image(video, 0, 0, 480, 380); 
}
