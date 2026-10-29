import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mts67banp.css';
import '../../css/i/i8ycrbbjm.css';
import '../../css/n/n1fnp97zj.css';
import '../../css/c/cw36_6mco.css';
import '../../css/f/fefa1ib-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mts67banp wm-k"/><path class="i8ycrbbjm wm-a"/><path class="n1fnp97zj wm-shadow"/><path class="cw36_6mco wm-a"/><path class="fefa1ib-u wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-spline-engrave"} {...others} />);
}

export default Component;
