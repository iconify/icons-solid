import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g_rvqfhbi.css';
import '../../css/i/i3lux_m8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g_rvqfhbi"/><path class="i3lux_m8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:crop-rotate-bl"} {...others} />);
}

export default Component;
