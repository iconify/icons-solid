import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls4jnlmwq.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/q/qcfz5dbfa.css';
import '../../css/r/rytwwbcac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ls4jnlmwq"/><circle class="mpf1g8bav"/><path class="qcfz5dbfa"/><path class="rytwwbcac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ball"} {...others} />);
}

export default Component;
