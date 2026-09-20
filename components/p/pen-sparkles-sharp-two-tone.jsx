import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jlvs6-k6s.css';
import '../../css/z/zgwutpbmz.css';
import '../../css/c/c_xk-lr_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="jlvs6-k6s"/><path class="zgwutpbmz"/><path class="c_xk-lr_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pen-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
