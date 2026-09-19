import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lc4s8kbon.css';
import '../../css/g/gybzzbn-v.css';
import '../../css/q/q0a-0wbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lc4s8kbon"/><path class="gybzzbn-v"/><path class="q0a-0wbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mask-love"} {...others} />);
}

export default Component;
