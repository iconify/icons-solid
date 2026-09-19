import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wh9opwgvq.css';
import '../../css/o/oa9-0xdcp.css';
import '../../css/z/zya3c2i3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wh9opwgvq"/><path class="oa9-0xdcp"/><path class="zya3c2i3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:asteroid-01"} {...others} />);
}

export default Component;
