
function  hascollided(obj1,obj2){
    bulletRightEdge=obj1.x+obj1.width;
    WallLeftEdge=obj2.x;
    if (
    bulletRightEdge>=WallLeftEdge
        
        ) {
      
      return true;
    }
    else {
      
      
      return false;
    }
}