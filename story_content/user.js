function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64MUmTyiUud":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const addCssToHead = (cssRules) => {
    const styleElement = document.createElement('style');
    styleElement.textContent = cssRules;
    document.head.appendChild(styleElement);
};

const css = `
.caption-container {
    pointer-events: auto !important;
} 
.caption{
    cursor: grab;
}
`;
addCssToHead(css);

document.querySelectorAll('.caption-container').forEach(caption => {
    let offsetX, offsetY, posX, posY;

    const handleMouseMove = (e) => {
        e.preventDefault();
        let clientX, clientY;
        if (e.clientX) {
            clientX = e.clientX;
            clientY = e.clientY;
        } else if (e.touches && e.touches.length === 1) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }
        const dx = clientX - offsetX;
        const dy = clientY - offsetY;
        caption.style.transform = `translate(${posX + dx}px, ${posY + dy}px)`;
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        caption.style.cursor = 'grab';
    };

    caption.addEventListener('mousedown', (e) => {
        e.preventDefault();
        caption.style.cursor = 'grabbing';
        offsetX = e.clientX;
        offsetY = e.clientY;
        const rect = caption.getBoundingClientRect();
        posX = rect.left;
        posY = rect.top;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    // Touch events for mobile devices
    caption.addEventListener('touchstart', (e) => {
        e.preventDefault();
        caption.style.cursor = 'grabbing';
        offsetX = e.touches[0].clientX;
        offsetY = e.touches[0].clientY;
        const rect = caption.getBoundingClientRect();
        posX = rect.left;
        posY = rect.top;
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchend', handleMouseUp);
    });
});

}

};
