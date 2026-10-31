import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y819vj78e.css';
import '../../css/b/b7_0zn6ww.css';
import '../../css/o/o878e-b1y.css';
import '../../css/n/n5w_ncgkk.css';
import '../../css/d/dgmgfhiiv.css';
import '../../css/o/o-w665bpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow y819vj78e"/><path class="b7_0zn6ww"/><path class="o878e-b1y"/><path class="n5w_ncgkk"/><path class="dgmgfhiiv"/><path class="o-w665bpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:thermometer"} {...others} />);
}

export default Component;
