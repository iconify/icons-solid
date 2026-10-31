import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qfryvfb_w.css';
import '../../css/t/tqx1fg5xu.css';
import '../../css/c/cn3yhibic.css';
import '../../css/i/iap5_6bgh.css';
import '../../css/d/duwcq9bol.css';
import '../../css/r/rk1utqxsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qfryvfb_w wm-shadow"/><path class="tqx1fg5xu"/><path class="cn3yhibic"/><path class="iap5_6bgh"/><path class="duwcq9bol"/><path class="rk1utqxsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:arrow-big-up"} {...others} />);
}

export default Component;
