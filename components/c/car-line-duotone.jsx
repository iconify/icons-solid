import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aryxth3tj.css';
import '../../css/k/k7cnvkblo.css';
import '../../css/f/fzmgkeb5d.css';
import '../../css/p/p2s20_b9g.css';
import '../../css/w/wyu6dlbwx.css';
import '../../css/y/ybgk0--2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aryxth3tj"/><path class="k7cnvkblo"/><path class="fzmgkeb5d"/><path class="p2s20_b9g"/><path class="wyu6dlbwx"/><path class="ybgk0--2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-line-duotone"} {...others} />);
}

export default Component;
