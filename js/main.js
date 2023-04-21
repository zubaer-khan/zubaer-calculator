const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display');

keys.addEventListener('click', event => {
    if(!event.target.closest('button')) return;

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = calculator.dataset
    
    if (type === 'number'){
        if (displayValue === '0'){
            display.textContent = keyValue;
        }else if (previousKeyType === 'operator') {
            display.textContent = keyValue;
        }else{
            display.textContent += keyValue;
        }
    }

    if (type === 'operator'){
        console.log(key)
    }

    calculator.dataset.previousKeyType = type;
})
