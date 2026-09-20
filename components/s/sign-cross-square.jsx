import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrk74_bnb.css';
import '../../css/k/k6m4-x72j.css';
import '../../css/q/q_6j7w3aq.css';
import '../../css/q/qnuvpv2ip.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rrk74_bnb"/><path class="k6m4-x72j"/><path class="q_6j7w3aq"/><path class="qnuvpv2ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:sign-cross-square"} {...others} />);
}

export default Component;
