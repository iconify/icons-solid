import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jr_8_2lyc.css';
import '../../css/s/s6w-gizhm.css';
import '../../css/b/bd9iuybie.css';
import '../../css/f/faaiuubbc.css';
import '../../css/c/cc1cp5b9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jr_8_2lyc"/><path class="s6w-gizhm wm-a"/><path class="bd9iuybie"/><path class="faaiuubbc"/><path class="cc1cp5b9b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-girl-duo"} {...others} />);
}

export default Component;
