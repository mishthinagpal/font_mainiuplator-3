leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(460,500);
    video.position(160,150);

    canvas=createCanvas(400,400);
    canvas.position(650,200);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("yellow");
    document.getElementById("span").innerHTML="Width and Height of the square will be: "+ difference + " px";
textSize(difference);
fill(pink);
text("Mishthi",30,30);
}

    function modelLoaded(){
        console.log("PoseNet is Initialised");
    }
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            leftWristX=results[0].pose.leftWrist.x;
            rightWristX=results[0].pose.rightWrist.x;
            difference=floor(leftWristX-rightWristX);
         }
        }