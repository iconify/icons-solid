import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/u/u1p3rl9ue.css';
import '../../css/e/ec8_5vbia.css';
import '../../css/s/sog0659hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l80i0rb1m"/><path class="u1p3rl9ue"/><path class="ec8_5vbia"/><path class="sog0659hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-cross-circle-bold-duotone"} {...others} />);
}

export default Component;
