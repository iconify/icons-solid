import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bqqubi45u.css';
import '../../css/p/p5qtbsb9t.css';
import '../../css/y/yh5j-urgz.css';
import '../../css/p/pengmob8k.css';
import '../../css/w/w0h07xbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bqqubi45u wm-shadow"/><path class="p5qtbsb9t"/><path class="yh5j-urgz"/><path class="pengmob8k"/><path class="w0h07xbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sailboat"} {...others} />);
}

export default Component;
