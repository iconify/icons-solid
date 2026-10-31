import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fmt8t-bkh.css';
import '../../css/h/h-emp1b9q.css';
import '../../css/g/gby_x_22c.css';
import '../../css/s/s8wfk6fit.css';
import '../../css/k/kkr0hmi_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fmt8t-bkh wm-shadow"/><path class="h-emp1b9q"/><path class="gby_x_22c"/><path class="s8wfk6fit"/><path class="kkr0hmi_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:git-graph"} {...others} />);
}

export default Component;
