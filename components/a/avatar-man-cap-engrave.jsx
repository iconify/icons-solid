import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eenc2_17e.css';
import '../../css/q/q892v2lvf.css';
import '../../css/l/lcgts6bps.css';
import '../../css/u/ulv4w1bmu.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/z/z72glqi-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eenc2_17e wm-k"/><path class="q892v2lvf wm-a"/><path class="lcgts6bps wm-shadow"/><path class="ulv4w1bmu wm-k"/><path class="d3y9mw6db wm-k"/><path class="wm-a z72glqi-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-cap-engrave"} {...others} />);
}

export default Component;
