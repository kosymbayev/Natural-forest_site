document.addEventListener('mousemove', e => 
{
    Object.assign(document.documentElement, 
    {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})

window.addEventListener('load', function () 
{
    if (window.innerWidth < 1024 || !isDesktopDevice()) 
    {
        alert('I recommend going through the computer, you need a mouse for the best experience \nРекомендую зайти через компьютер, вам нужна мышь для наилучшего впечатления');
    }
});

function isDesktopDevice() 
{
    return !isMobileDevice() && !isTabletDevice();
}
