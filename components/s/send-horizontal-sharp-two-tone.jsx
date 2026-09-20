import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t_mxf2b2m.css';
import '../../css/y/yyd8v3-4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="t_mxf2b2m"/><path class="yyd8v3-4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:send-horizontal-sharp-two-tone"} {...others} />);
}

export default Component;
