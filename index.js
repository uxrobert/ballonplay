console.log('index is working')


// OnLoad Ballons appear by random
//assign ballons vaariable
// function to show randon


// function getRandomBallons(event){
//     console.log('!!!!!')
//     event.preventDefault()
//     let area = document.getElementById("mainbox")
//     let picimage = document.createElement("Img")
//     picimage.setAttribute("src", "images/ballon" + (Math.round(Math.random() * 3)) + ".png")
//     area.appendChild(picimage)
//     }


// create ballon function to creatt any anmount ballon 
// ballon must be created within area by restriction
   
    let restrictedBallon = (event) => {
        
        console.log('working!!!!!!')
        // event.preventDefault()
        const area = document.getElementById('mainbox')
        const ctx = area.getContext('2d')
        let ballons = document.createElement("img")
        ballons.width = "2px";
        ballons.height = "2px";
        ballons.src =   "/images/b" + Math.floor(Math.random() * 4) + ".png"
        console.log(ballons)
        // let b1 = new Image(10,10)
        // b1.setAttribute("src", "images/b1.png")
        // let b2 = new Image(10,10)
        // b2.setAttribute("src", "images/b2.png")
        // let b3 = new Image(10,10)
        // b3.setAttribute("src", "images/b3.png")
        // ballons = [b1, b2, b3]
        // ballons = Image
        let = randomBaloon = []
        randomBaloon.push(ballons)
        ctx.drawImage(ballons,0,0);
        area.appendChild(ballons)
    
        // ctx.drawImage(img, 0, 0);   
    
        resetBallon = function(){
            context.clearRect(0, 0, canvas.width, canvas.height);

    }


    
   
     }

     
   

//      var myImage = new Image(100, 200);
// myImage.src = 'picture.jpg';
// document.body.appendChild(myImage);

    

   

// let box = document.querySelector('div');
// let width = box.clientWidth;
// let height = box.clientHeight;