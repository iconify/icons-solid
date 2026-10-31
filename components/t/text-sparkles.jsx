import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dz68pmhba.css';
import '../../css/t/t96vnybgy.css';
import '../../css/x/xwzqgyp5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dz68pmhba wm-shadow"/><path class="t96vnybgy wm-s"/><path class="xwzqgyp5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:text-sparkles"} {...others} />);
}

export default Component;
