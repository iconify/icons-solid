import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yrce0dx3b.css';
import '../../css/e/ey58x5bil.css';
import '../../css/k/kp5upqfdx.css';
import '../../css/v/vg2dcxbfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yrce0dx3b"/><path class="ey58x5bil wm-shadow"/><path class="kp5upqfdx"/><path class="vg2dcxbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pill"} {...others} />);
}

export default Component;
