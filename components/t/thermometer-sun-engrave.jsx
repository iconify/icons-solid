import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/upnq-vb_x.css';
import '../../css/r/rq86edb2v.css';
import '../../css/u/u4r_7hozg.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/t/thjectbkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="upnq-vb_x wm-k"/><path class="rq86edb2v wm-a"/><path class="u4r_7hozg wm-shadow"/><path class="ipkd9vbgw wm-k"/><path class="thjectbkq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-sun-engrave"} {...others} />);
}

export default Component;
