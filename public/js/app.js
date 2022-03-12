console.log('client side js file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')
const messageThree = document.querySelector('#message3')

weatherForm.addEventListener('submit', (e) => { // listen on submit event and callback function named e
    e.preventDefault()
    
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    if(!location){
        return console.log('input is invalid')
    }

    fetch('http://localhost:3000/weather?address='+location).then((response) => { // อันนี้เรา fetch ไปที่ app.js เรา เพื่อรอ res กลับมา
    response.json().then((data) => { // เอา response ที่เป็น json มาแกะเอา data
        
        // เรา res.send มา 1 ค่าถ้า error และ 3 ค่าถ้าไม่ error ได้แก้ location, forecast, address
        if(data.error){     
            console.log('data error')
            messageOne.textContent = data.error
            messageTwo.textContent = ''
            messageThree.textContent = ''
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            messageThree.textContent = data.address
        }
    })
})

})