import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdq6guqpt.css';
import '../../css/m/ma8xebchi.css';
import '../../css/j/jops46icm.css';
import '../../css/s/soxgggbzu.css';
import '../../css/n/n2-6f21cu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kdq6guqpt"/><path class="ma8xebchi"/><path class="jops46icm"/><path class="soxgggbzu"/><path class="n2-6f21cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dyalog"} {...others} />);
}

export default Component;
