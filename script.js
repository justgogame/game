const field = document.getElementById('field');

let player = document.createElement('div');
player.id = 'player';
field.appendChild(player);

let playerX = 0;
let playerY = 0;

document.body.addEventListener('keypress', function(event){
    if(event.key === 'w' && playerY > 0){
        playerY = playerY - 100;
        player.style.top = playerY + 'px';
    }
    if(event.key === 's' && playerY < 700){
        playerY = playerY + 100;
        player.style.top = playerY + 'px';
    }
    if(event.key === 'a' && playerX > 0){
        playerX = playerX - 100;
        player.style.left = playerX + 'px';
    }
    if(event.key === 'd' && playerX < 700){
        playerX = playerX + 100;
        player.style.left = playerX + 'px';
    }
    if(event.key === ' ' && playerX <= 175 && playerY <= 175){
        playerX = 700;
        playerY = 0;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }else if(event.key === ' ' && playerX > 525 && playerY <= 175){
        playerX = 700;
        playerY = 700;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }else if(event.key === ' ' && playerX > 525 && playerY > 525){
        playerX = 0;
        playerY = 700;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }else if(event.key === ' ' && playerX <= 175 && playerY > 525){
        playerX = 0;
        playerY = 0;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }
    if(event.key === ' ' && playerX < 350 && playerY < 350){
        playerX = 0;
        playerY = 0;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }
    if(event.key === ' ' && playerX > 350 && playerY < 350){
        playerX = 700;
        playerY = 0;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }
    if(event.key === ' ' && playerX < 350 && playerY > 350){
        playerX = 0;
        playerY = 700;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }
    if(event.key === ' ' && playerX >= 350 && playerY >= 350){
        playerX = 700;
        playerY = 700;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }   
});

let enemy1X = 700, enemy1Y = 700;
let enemy2X = 0, enemy2Y = 700;
let enemy1 = document.createElement('div');
let enemy2 = document.createElement('div');
enemy1.id = 'enemy1';
enemy2.id = 'enemy2';
enemy1.style.top = enemy1Y + 'px';
enemy1.style.left = enemy1X + 'px';
enemy2.style.top = enemy2Y + 'px';
enemy2.style.left = enemy2X + 'px';
field.appendChild(enemy1);
field.appendChild(enemy2);


const intervalId = setInterval(function(){
    if(playerX === enemy1X && playerY === enemy1Y){
        enemy1Y = 10000;
        enemy1X = 10000;
        enemy1.style.display = 'none';
    }else if(playerX === enemy2X && playerY === enemy2Y){
        enemy2Y = 10000;
        enemy2X = 10000;
        enemy2.style.display = 'none';
    }else if(enemy1.style.display === 'none' && enemy2.style.display === 'none'){
        alert('You are winner');
        clearInterval(intervalId);
    }else if(playerY - enemy1Y <= 300 && playerY - enemy1Y >= -300 && 
            playerX - enemy1X <= 300 && playerX - enemy1X >= -300){
        if(playerY - enemy1Y > 0){
            enemy1Y = enemy1Y + 100;
        }
        if(playerY - enemy1Y < 0){
            enemy1Y = enemy1Y - 100;
        }
        if(playerX - enemy1X > 0){
            enemy1X = enemy1X + 100;
        }
        if(playerX - enemy1X < 0){
            enemy1X = enemy1X - 100;
        }
        enemy1.style.top = enemy1Y + 'px';
        enemy1.style.left = enemy1X + 'px';
        if(playerX - enemy1X === 0 && playerY - enemy1Y === 0){
            alert('You are dead');
            clearInterval(intervalId);
        }
    }else if(playerY - enemy2Y <= 300 && playerY - enemy2Y >= -300 && 
            playerX - enemy2X <= 300 && playerX - enemy2X >= -300){
        if(playerY - enemy2Y > 0){
            enemy2Y = enemy2Y + 100;
        }
        if(playerY - enemy2Y < 0){
            enemy2Y = enemy2Y - 100;
        }
        if(playerX - enemy2X > 0){
            enemy2X = enemy2X + 100;
        }
        if(playerX - enemy2X < 0){
            enemy2X = enemy2X - 100;
        }
        enemy2.style.top = enemy2Y + 'px';
        enemy2.style.left = enemy2X + 'px';
        if(playerX - enemy2X === 0 && playerY - enemy2Y === 0){
            alert('You are dead');
            clearInterval(intervalId);
        }  
    }
}, 1000)