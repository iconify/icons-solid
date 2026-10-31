import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sneuszb2o.css';
import '../../css/u/unu_j3b3e.css';
import '../../css/n/nw8etgxrl.css';
import '../../css/r/rcok19a6x.css';
import '../../css/x/xycsznv4t.css';
import '../../css/y/y5m0kib5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sneuszb2o wm-shadow"/><path class="unu_j3b3e"/><path class="nw8etgxrl"/><path class="rcok19a6x"/><path class="xycsznv4t"/><path class="y5m0kib5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:gift"} {...others} />);
}

export default Component;
