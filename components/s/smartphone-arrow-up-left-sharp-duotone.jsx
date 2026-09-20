import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bwu_g5bwh.css';
import '../../css/v/vuezxabre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="bwu_g5bwh"/><path class="vuezxabre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-arrow-up-left-sharp-duotone"} {...others} />);
}

export default Component;
