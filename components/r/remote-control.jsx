import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q2fv44bqw.css';
import '../../css/i/iwk_ip_0v.css';
import '../../css/p/p1m5r4_0u.css';
import '../../css/m/mdl08j7yx.css';
import '../../css/l/lvsgs6bwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q2fv44bqw wm-shadow"/><path class="iwk_ip_0v wm-shadow"/><path class="p1m5r4_0u"/><path class="mdl08j7yx"/><path class="lvsgs6bwq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:remote-control"} {...others} />);
}

export default Component;
