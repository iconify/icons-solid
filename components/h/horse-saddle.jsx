import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ddc6_swix.css';
import '../../css/k/kirb73bqe.css';
import '../../css/w/w966n2bvb.css';
import '../../css/v/vp612abwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ddc6_swix"/><path class="kirb73bqe"/><path class="w966n2bvb"/><path class="vp612abwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:horse-saddle"} {...others} />);
}

export default Component;
