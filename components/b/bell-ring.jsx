import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ur8rqccgv.css';
import '../../css/x/xznvoekor.css';
import '../../css/u/ussajy8ym.css';
import '../../css/u/utiq7_d6p.css';
import '../../css/r/riavolbye.css';
import '../../css/i/i9afm2bto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ur8rqccgv wm-shadow"/><path class="xznvoekor"/><path class="ussajy8ym"/><path class="utiq7_d6p"/><path class="riavolbye"/><path class="i9afm2bto wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bell-ring"} {...others} />);
}

export default Component;
