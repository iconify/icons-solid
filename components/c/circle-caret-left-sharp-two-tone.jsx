import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ozqsggbsj.css';
import '../../css/l/l-1ucdbni.css';
import '../../css/n/nd1h41chj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ozqsggbsj"/><path class="l-1ucdbni"/><path class="nd1h41chj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-caret-left-sharp-two-tone"} {...others} />);
}

export default Component;
