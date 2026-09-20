import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tzmtlc8up.css';
import '../../css/p/p38ldjuia.css';
import '../../css/n/nutxvywlz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tzmtlc8up"/><path class="p38ldjuia"/><path class="nutxvywlz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-wave-linear"} {...others} />);
}

export default Component;
