import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tjearpv2d.css';
import '../../css/n/n0gdqubsa.css';
import '../../css/i/irqwneb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tjearpv2d"/><path class="n0gdqubsa"/><path class="irqwneb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:whisk-line-duotone"} {...others} />);
}

export default Component;
