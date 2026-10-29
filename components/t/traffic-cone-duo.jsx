import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jaoc7wa3q.css';
import '../../css/d/d0rm88b6m.css';
import '../../css/z/zo3y1ub3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jaoc7wa3q"/><path class="d0rm88b6m wm-a"/><path class="zo3y1ub3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:traffic-cone-duo"} {...others} />);
}

export default Component;
