import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yiym35b5k.css';
import '../../css/q/q7_b2ubhz.css';
import '../../css/d/dbuwv9blf.css';
import '../../css/r/rw5ofbwhd.css';
import '../../css/b/bf-0h3pje.css';
import '../../css/g/gzlrm40mx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yiym35b5k"/><path class="q7_b2ubhz"/><path class="dbuwv9blf"/><path class="rw5ofbwhd"/><path class="bf-0h3pje"/><path class="gzlrm40mx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:plane"} {...others} />);
}

export default Component;
