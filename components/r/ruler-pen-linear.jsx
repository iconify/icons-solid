import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgrm2rbfz.css';
import '../../css/r/rrxhurnze.css';
import '../../css/c/c9dh15yvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hgrm2rbfz"/><path class="rrxhurnze"/><path class="c9dh15yvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-pen-linear"} {...others} />);
}

export default Component;
