import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kiajoqb0e.css';
import '../../css/n/nu71q2bve.css';
import '../../css/z/zu45yfb2g.css';
import '../../css/z/zbjlsgbtl.css';
import '../../css/s/s6yvuq4-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kiajoqb0e wm-shadow"/><path class="nu71q2bve"/><path class="zu45yfb2g"/><path class="zbjlsgbtl"/><path class="s6yvuq4-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:user"} {...others} />);
}

export default Component;
