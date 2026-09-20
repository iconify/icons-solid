import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tid3y7ujw.css';
import '../../css/w/wljjiqjly.css';
import '../../css/i/i5_aqn80p.css';
import '../../css/h/hal8f3bya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tid3y7ujw"/><path class="wljjiqjly"/><path class="i5_aqn80p"/><path class="hal8f3bya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-2-line-duotone"} {...others} />);
}

export default Component;
