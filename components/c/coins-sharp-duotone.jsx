import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j41a42nnh.css';
import '../../css/y/y5hju585n.css';
import '../../css/r/rkjqeacdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="j41a42nnh"/><path clip-rule="evenodd" class="y5hju585n"/><path class="rkjqeacdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coins-sharp-duotone"} {...others} />);
}

export default Component;
