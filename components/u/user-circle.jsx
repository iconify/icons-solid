import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vfblgthpy.css';
import '../../css/y/ybc_75b2x.css';
import '../../css/j/j24_fix6g.css';
import '../../css/j/j1ba9pq5z.css';
import '../../css/k/krrm7rbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vfblgthpy wm-shadow"/><path class="ybc_75b2x"/><path class="j24_fix6g"/><path class="j1ba9pq5z"/><path class="krrm7rbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:user-circle"} {...others} />);
}

export default Component;
