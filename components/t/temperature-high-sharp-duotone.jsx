import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t7c033bqn.css';
import '../../css/y/yva1_1fly.css';
import '../../css/u/u8_q54bsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="t7c033bqn"/><path class="yva1_1fly"/><path class="u8_q54bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:temperature-high-sharp-duotone"} {...others} />);
}

export default Component;
