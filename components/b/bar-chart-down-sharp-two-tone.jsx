import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dk4_o5c1g.css';
import '../../css/t/tsngy8x8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="dk4_o5c1g"/><path class="tsngy8x8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bar-chart-down-sharp-two-tone"} {...others} />);
}

export default Component;
