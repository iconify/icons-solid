import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s74-1j5ey.css';
import '../../css/h/hv4r2jbbw.css';
import '../../css/l/luos77azp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="s74-1j5ey"/><path class="hv4r2jbbw"/><path class="luos77azp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:parachute-drop"} {...others} />);
}

export default Component;
