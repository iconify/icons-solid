import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep3pxu-ev.css';
import '../../css/m/mtjh54p0v.css';
import '../../css/h/hl1c8qc5p.css';
import '../../css/r/rllpyvb2u.css';
import '../../css/i/iy9kgebxt.css';
import '../../css/l/l8dc30bis.css';
import '../../css/n/nofwbdbos.css';
import '../../css/y/y46sobb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ep3pxu-ev wm-shadow"/><path class="mtjh54p0v wm-k"/><path class="hl1c8qc5p wm-k"/><path class="rllpyvb2u wm-k"/><path class="iy9kgebxt wm-k"/><path class="l8dc30bis wm-k"/><path class="nofwbdbos wm-shine"/><path class="wm-a y46sobb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:minus-circle"} {...others} />);
}

export default Component;
