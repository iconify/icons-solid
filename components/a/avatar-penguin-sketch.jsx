import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xe5z6mstv.css';
import '../../css/y/yab-qjc4s.css';
import '../../css/j/j_co9j11q.css';
import '../../css/d/du_xhybiq.css';
import '../../css/p/pd6es9u_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xe5z6mstv"/><path class="wm-k yab-qjc4s"/><path class="j_co9j11q wm-k"/><path class="du_xhybiq wm-k"/><path class="pd6es9u_u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-penguin-sketch"} {...others} />);
}

export default Component;
