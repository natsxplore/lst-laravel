import './bootstrap';
import $ from 'jquery';
import 'block-ui/jquery.blockUI.js';

window.$ = window.jQuery = $;

const loaderHTML = '<span class="loader"></span>';
const blockUI = () => {
    $.blockUI({
        message: loaderHTML,
        css: {
            border: 'none',
            backgroundColor: 'transparent'
        },
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.7,
            cursor: 'wait'
        }
    });
};

const unblockUI = () => $.unblockUI();

// Auto Block UI on load and AJAX
$(function () {
    blockUI();
    $(window).on('load', unblockUI);
    $(document)
        .ajaxStart(blockUI)
        .ajaxStop(unblockUI)
        .ajaxError(unblockUI);
});

window.routeTo = (url) => window.location.href = url;