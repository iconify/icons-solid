import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe_oog-7r.css';
import '../../css/y/y1lal-b9l.css';
import '../../css/k/kaeczxbmu.css';
import '../../css/n/nqrk6qx3l.css';
import '../../css/n/nlco_zboc.css';
import '../../css/b/bgoy3rysp.css';
import '../../css/z/zt2zjgzxa.css';
import '../../css/v/vtx8nb_sa.css';
import '../../css/h/hzcpqtahc.css';

const viewBox = {"width":512,"height":512};
const content = `<g transform="matrix(2.7 0 0 2.7 -14.386 -14.386)"><path class="xe_oog-7r"/><path class="y1lal-b9l"/><path class="kaeczxbmu"/><path class="nqrk6qx3l"/><ellipse class="nlco_zboc"/><ellipse class="bgoy3rysp"/><ellipse class="zt2zjgzxa"/><ellipse class="vtx8nb_sa"/><path class="hzcpqtahc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:ring-buoy"} {...others} />);
}

export default Component;
