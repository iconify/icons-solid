import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epjhfwbro.css';
import '../../css/h/h8h_gsbvo.css';
import '../../css/b/bvnxnbndp.css';
import '../../css/n/n-22qcczj.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="epjhfwbro"/><path class="h8h_gsbvo"/><path class="bvnxnbndp"/><path class="n-22qcczj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cl"} {...others} />);
}

export default Component;
