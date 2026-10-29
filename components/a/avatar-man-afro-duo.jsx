import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/r/rrxs73kzb.css';
import '../../css/a/apf_lpbdo.css';
import '../../css/a/azaw88ucy.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/x/xfncq-o6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="rrxs73kzb wm-a"/><path class="apf_lpbdo wm-a"/><path class="azaw88ucy"/><path class="d3y9mw6db"/><path class="wm-a xfncq-o6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-afro-duo"} {...others} />);
}

export default Component;
