import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ji0piu9jt.css';
import '../../css/h/hgrwv-bfy.css';
import '../../css/v/vez31lozr.css';
import '../../css/s/se1lg5bvg.css';
import '../../css/d/djp-j-tiu.css';
import '../../css/q/q1qwgqbhc.css';
import '../../css/w/wipdncbih.css';
import '../../css/j/jdn53op3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ji0piu9jt wm-shadow"/><path class="hgrwv-bfy wm-shadow"/><path class="vez31lozr"/><path class="se1lg5bvg"/><path class="djp-j-tiu"/><path class="q1qwgqbhc"/><path class="wipdncbih"/><path class="jdn53op3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:package"} {...others} />);
}

export default Component;
