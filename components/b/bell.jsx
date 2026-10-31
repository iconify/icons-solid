import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rkrqwx5aj.css';
import '../../css/x/xznvoekor.css';
import '../../css/u/ussajy8ym.css';
import '../../css/u/utiq7_d6p.css';
import '../../css/r/riavolbye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rkrqwx5aj wm-shadow"/><path class="xznvoekor"/><path class="ussajy8ym"/><path class="utiq7_d6p"/><path class="riavolbye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bell"} {...others} />);
}

export default Component;
