import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/omcml5byg.css';
import '../../css/r/r0-cyki5y.css';
import '../../css/y/yuyh56b1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="omcml5byg"/><path class="r0-cyki5y"/><path class="yuyh56b1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:battery-charging-01"} {...others} />);
}

export default Component;
