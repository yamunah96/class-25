const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var button1

var ground,ball,wedge
var angle=120



function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  // we are using p5.dom.min.js
  button1= createImg("up.png")
  button1.size(50,50)
  button1.position(20,30)
  button1.mouseClicked(vforce)

  // Matter.Bodies.rectangle(x, y, width, height, [options])
  var ground_options={
    isStatic:true
  }
  ground= Bodies.rectangle(200,380,400,10,ground_options)
  World.add(world,ground)


  var wedge_options={
    isStatic:true
  }
  wedge= Bodies.rectangle(200,100,100,20,wedge_options)
  World.add(world,wedge)

  // Matter.Bodies.circle(x, y, radius, [options], [maxSides]) 
  var ball_options={
    resitution:0.95,
    frictionAir:0.01
  }
  ball= Bodies.circle(200,200,20,ball_options)
  World.add(world,ball)

  ellipseMode(RADIUS)
  rectMode(CENTER)
  
}


function draw() {
  background(51);
  Engine.update(engine);

  // using p5 libray codes to display
  rect(ground.position.x, ground.position.y, 400,10)


  // Matter.Body.rotate(body, rotation, [point])
  Body.rotate(wedge,angle)
  push()
  translate(wedge.position.x, wedge.position.y)
  rotate(angle)
  fill("cyan")
  rect(0,0,100,20)
  angle+=10
  pop()


  ellipse(ball.position.x, ball.position.y,20)
  
  

}

function vforce(){
  //Matter.Body.applyForce(body, position, force)
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})
}


