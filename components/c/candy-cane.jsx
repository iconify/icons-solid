import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhfusqcuw.css';
import '../../css/r/rkx8dpx4g.css';
import '../../css/h/hvynn5bup.css';
import '../../css/n/nd1k3t0lu.css';
import '../../css/o/owa2qib-u.css';
import '../../css/p/peizfdcqi.css';
import '../../css/d/doffi5b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fhfusqcuw wm-k"/><path class="rkx8dpx4g wm-deco"/><path class="hvynn5bup wm-k"/><path class="nd1k3t0lu wm-k"/><path class="owa2qib-u wm-shadow"/><path class="peizfdcqi wm-shine"/><path class="doffi5b8j wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:candy-cane"} {...others} />);
}

export default Component;
