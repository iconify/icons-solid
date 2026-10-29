import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mpa2w_bcn.css';
import '../../css/x/xzhdfqg-r.css';
import '../../css/w/wl190dicw.css';
import '../../css/v/v_917cbym.css';
import '../../css/p/py8uhtbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mpa2w_bcn wm-k"/><path class="wm-a xzhdfqg-r"/><path class="wl190dicw wm-shadow"/><path class="v_917cbym wm-k"/><path class="py8uhtbvo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tooth-crown-engrave"} {...others} />);
}

export default Component;
