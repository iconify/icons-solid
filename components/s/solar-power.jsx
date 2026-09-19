import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l2rvtoxlz.css';
import '../../css/t/t43vemb6k.css';
import '../../css/u/u4agv6btr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l2rvtoxlz"/><path class="t43vemb6k"/><path class="u4agv6btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:solar-power"} {...others} />);
}

export default Component;
