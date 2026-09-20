import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l3jogvtxu.css';
import '../../css/e/erekrcbav.css';
import '../../css/a/abin0ybht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l3jogvtxu"/><path class="erekrcbav"/><path class="abin0ybht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:iphone-broken"} {...others} />);
}

export default Component;
