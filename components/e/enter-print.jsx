import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw_32pbvj.css';
import '../../css/v/vh8cdubgk.css';
import '../../css/e/ewja4-1ua.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><rect class="jw_32pbvj"/><path clip-rule="evenodd" class="vh8cdubgk"/><path class="ewja4-1ua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:enter-print"} {...others} />);
}

export default Component;
