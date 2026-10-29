import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pnl3qq6dw.css';
import '../../css/h/h-88fv_ot.css';
import '../../css/l/liwxtwofv.css';
import '../../css/z/za3dt0bho.css';
import '../../css/r/rcb7clbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pnl3qq6dw wm-k"/><path class="h-88fv_ot wm-a"/><path class="liwxtwofv wm-shadow"/><path class="wm-k za3dt0bho"/><path class="rcb7clbki wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-camera-engrave"} {...others} />);
}

export default Component;
