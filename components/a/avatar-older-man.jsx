import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j5qe5wrwz.css';
import '../../css/q/qyq1e1b0d.css';
import '../../css/i/izmq6-b4l.css';
import '../../css/o/oun42dbce.css';
import '../../css/j/j55ny-cty.css';
import '../../css/o/o6ku2ytlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j5qe5wrwz wm-shadow"/><path class="qyq1e1b0d"/><path class="izmq6-b4l"/><path class="oun42dbce"/><path class="j55ny-cty wm-shine"/><path class="o6ku2ytlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-older-man"} {...others} />);
}

export default Component;
