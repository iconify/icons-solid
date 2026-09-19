import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcg8mdk_e.css';
import '../../css/n/ngtd4hbhd.css';
import '../../css/o/o5czz65za.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pcg8mdk_e"/><path class="ngtd4hbhd"/><path class="o5czz65za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:tram"} {...others} />);
}

export default Component;
