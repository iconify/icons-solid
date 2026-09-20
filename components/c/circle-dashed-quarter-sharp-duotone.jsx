import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yrnc_2blo.css';
import '../../css/t/tsl0sqa9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="yrnc_2blo"/><path class="tsl0sqa9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-dashed-quarter-sharp-duotone"} {...others} />);
}

export default Component;
