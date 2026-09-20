import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgy-6rbgh.css';
import '../../css/m/mbp_w6jfq.css';
import '../../css/i/im1hkobej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hgy-6rbgh"/><path class="mbp_w6jfq"/><path class="im1hkobej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-minimalistic-linear"} {...others} />);
}

export default Component;
