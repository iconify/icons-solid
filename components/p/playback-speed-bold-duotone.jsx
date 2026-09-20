import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwsnehvvy.css';
import '../../css/y/y5jlu0b0x.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/ns_onqv1v.css';
import '../../css/g/g-px437dg.css';
import '../../css/j/j0v4cub4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vwsnehvvy"/><path class="y5jlu0b0x"/><g class="mc2zb0bvp"><path class="ns_onqv1v"/><path class="g-px437dg"/><path class="j0v4cub4m"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playback-speed-bold-duotone"} {...others} />);
}

export default Component;
