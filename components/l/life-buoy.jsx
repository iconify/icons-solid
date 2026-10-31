import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wz0axgs-q.css';
import '../../css/y/ygiddimvq.css';
import '../../css/x/xqh697bhx.css';
import '../../css/u/u2y_uujnq.css';
import '../../css/w/wxgmti50c.css';
import '../../css/l/lyowjoykr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wz0axgs-q"/><path class="ygiddimvq"/><path class="xqh697bhx"/><path class="u2y_uujnq"/><path class="wxgmti50c"/><path class="lyowjoykr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:life-buoy"} {...others} />);
}

export default Component;
