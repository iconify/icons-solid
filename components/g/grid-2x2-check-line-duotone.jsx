import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/duo8u5b0b.css';
import '../../css/s/sukz5in0f.css';
import '../../css/f/frr67dw0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="duo8u5b0b"/><path class="sukz5in0f"/><path class="frr67dw0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-check-line-duotone"} {...others} />);
}

export default Component;
