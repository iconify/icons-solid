import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m4lswb51c.css';
import '../../css/s/s9psgfb2a.css';
import '../../css/x/xcnt8m2tq.css';
import '../../css/n/n3-ke9box.css';
import '../../css/y/y0llspbjc.css';
import '../../css/g/g6mlmib6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m4lswb51c wm-shadow"/><path class="s9psgfb2a"/><path class="xcnt8m2tq"/><path class="n3-ke9box"/><path class="y0llspbjc"/><path class="g6mlmib6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:notebook"} {...others} />);
}

export default Component;
