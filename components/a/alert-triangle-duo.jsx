import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m7_yunpth.css';
import '../../css/l/llod8s1is.css';
import '../../css/m/m3y59dfla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m7_yunpth"/><path class="llod8s1is wm-a"/><path class="m3y59dfla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alert-triangle-duo"} {...others} />);
}

export default Component;
