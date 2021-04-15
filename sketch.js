const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,rubber,iron;

var ball1,ball2,ball3,ball4,ball5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(300,400);
    rubber = new Rubber(900,450,70);
    stone = new Stone(700,320,100,100);
    
    ball1 = new Ball(200,300,30);
    ball2 = new Ball(280,150,30);
    ball3 = new Ball(200,400,30);
    ball4 = new Ball(200,450,30);
    ball5 = new Ball(200,550,30);
    
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

   
 
}