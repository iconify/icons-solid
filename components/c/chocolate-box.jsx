import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a3ty376mn.css';
import '../../css/l/lqkm_zb1c.css';
import '../../css/g/goa5w6bcu.css';
import '../../css/j/jeoc3-x0c.css';
import '../../css/g/goxeseb-e.css';
import '../../css/d/d6_3e1c9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a3ty376mn wm-shadow"/><path class="lqkm_zb1c"/><path class="goa5w6bcu"/><path class="jeoc3-x0c"/><path class="goxeseb-e"/><path class="d6_3e1c9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chocolate-box"} {...others} />);
}

export default Component;
