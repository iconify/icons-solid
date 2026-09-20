import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dwpy4-bec.css';
import '../../css/e/es5c5ho5q.css';
import '../../css/k/krdzqfbse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dwpy4-bec"/><path class="es5c5ho5q"/><path class="krdzqfbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-minimalistic-line-duotone"} {...others} />);
}

export default Component;
