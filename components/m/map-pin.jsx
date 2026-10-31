import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t1y-cbbzh.css';
import '../../css/n/ndvy49ebb.css';
import '../../css/q/q1ektqn4w.css';
import '../../css/j/j38254bcl.css';
import '../../css/r/rab-_w-vs.css';
import '../../css/q/q96ypfn3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t1y-cbbzh wm-shadow"/><path class="ndvy49ebb"/><path class="q1ektqn4w"/><path class="j38254bcl"/><path class="rab-_w-vs"/><path class="q96ypfn3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:map-pin"} {...others} />);
}

export default Component;
