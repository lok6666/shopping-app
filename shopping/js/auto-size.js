/**
 * Created by lovo_bdk on 15-12-17.
 */
!(function(win, doc){
    function setFontSize() {
        // ��ȡwindow ���
        // zeptoʵ�� $(window).width()������ô�ɵ�
        var winWidth =  window.innerWidth;
        doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;

    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function () {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 300);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        }
    }, false);

    //��ʼ��
    setFontSize();

}(window, document));
