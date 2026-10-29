import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ckbpelxgi.css';
import '../../css/i/ijhjfcc9c.css';
import '../../css/n/nrdn18act.css';
import '../../css/u/ukw3xqbut.css';
import '../../css/q/qj10p8mvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ckbpelxgi wm-k"/><path class="ijhjfcc9c wm-a"/><path class="nrdn18act wm-shadow"/><path class="ukw3xqbut wm-k"/><path class="qj10p8mvv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bath-engrave"} {...others} />);
}

export default Component;
