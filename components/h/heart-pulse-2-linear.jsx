import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnbd7q8ws.css';
import '../../css/z/z-uaizbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rnbd7q8ws"/><path class="z-uaizbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-pulse-2-linear"} {...others} />);
}

export default Component;
