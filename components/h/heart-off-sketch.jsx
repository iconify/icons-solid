import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iqflaeb-i.css';
import '../../css/u/u7w6s54ki.css';
import '../../css/g/gv_0dkbnc.css';
import '../../css/y/yadlqnbvi.css';
import '../../css/n/ntzvg7bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="iqflaeb-i"/><path class="u7w6s54ki wm-k"/><path class="gv_0dkbnc wm-s"/><path class="wm-k yadlqnbvi"/><path class="ntzvg7bwe wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-off-sketch"} {...others} />);
}

export default Component;
