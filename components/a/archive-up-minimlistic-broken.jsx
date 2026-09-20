import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l-llhz78d.css';
import '../../css/t/t6vi4ublf.css';
import '../../css/n/nxeolsbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l-llhz78d"/><path class="t6vi4ublf"/><path class="nxeolsbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-up-minimlistic-broken"} {...others} />);
}

export default Component;
