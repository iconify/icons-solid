import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/x/x21lwxpew.css';
import '../../css/u/ulv4w1bmu.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/z/z72glqi-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="wm-a x21lwxpew"/><path class="ulv4w1bmu"/><path class="d3y9mw6db"/><path class="wm-a z72glqi-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-cap-duo"} {...others} />);
}

export default Component;
