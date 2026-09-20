import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t0_3emlbr.css';
import '../../css/h/ha1er-b1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="t0_3emlbr"/><path class="ha1er-b1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-check-sharp-duotone"} {...others} />);
}

export default Component;
