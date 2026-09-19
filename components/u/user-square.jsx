import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u5fiq0e0a.css';
import '../../css/e/ebpntvbiw.css';
import '../../css/q/q_s4rbbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u5fiq0e0a"/><path class="ebpntvbiw"/><path class="q_s4rbbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-square"} {...others} />);
}

export default Component;
