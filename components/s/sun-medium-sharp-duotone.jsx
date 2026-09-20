import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gv2jrdtmw.css';
import '../../css/o/odmsiccqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="gv2jrdtmw"/><path class="odmsiccqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sun-medium-sharp-duotone"} {...others} />);
}

export default Component;
