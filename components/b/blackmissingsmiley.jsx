import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl8l72fir.css';
import '../../css/k/km0r8kbga.css';
import '../../css/w/wowqf1boy.css';
import '../../css/m/myqz-bbdt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rl8l72fir"/><path class="km0r8kbga"/><path class="wowqf1boy"/><path class="myqz-bbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackmissingsmiley"} {...others} />);
}

export default Component;
