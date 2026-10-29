import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u5fu4jbmd.css';
import '../../css/i/in4yf-o8i.css';
import '../../css/r/rp2js4ahk.css';
import '../../css/u/u2vb5vkpp.css';
import '../../css/p/plblxfb0l.css';
import '../../css/d/dq546evfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u5fu4jbmd"/><path class="in4yf-o8i"/><path class="rp2js4ahk wm-k"/><path class="u2vb5vkpp"/><path class="plblxfb0l wm-a"/><path class="dq546evfb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:edit-sketch"} {...others} />);
}

export default Component;
