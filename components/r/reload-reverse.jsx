import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dx8_9ybqq.css';
import '../../css/r/rl_ushuxb.css';
import '../../css/v/vmzefi_hu.css';
import '../../css/n/ngcdsdbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dx8_9ybqq"/><path class="rl_ushuxb"/><path class="vmzefi_hu"/><path class="ngcdsdbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:reload-reverse"} {...others} />);
}

export default Component;
