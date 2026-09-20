import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/emu04lb-f.css';
import '../../css/d/d992vwbtc.css';
import '../../css/i/izwsa0kiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="emu04lb-f"/><path class="d992vwbtc"/><path class="izwsa0kiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:traffic-economy-linear"} {...others} />);
}

export default Component;
