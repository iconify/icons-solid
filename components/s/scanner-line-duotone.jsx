import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ibs3thi1n.css';
import '../../css/q/qz9sq0bxe.css';
import '../../css/b/bhka77qrs.css';
import '../../css/d/dvj8nwb_d.css';
import '../../css/y/yirxaabex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ibs3thi1n"/><path class="qz9sq0bxe"/><path class="bhka77qrs"/><path class="dvj8nwb_d"/><path class="yirxaabex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-line-duotone"} {...others} />);
}

export default Component;
