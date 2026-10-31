import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exwrc0-ch.css';
import '../../css/u/u_9ezcbip.css';
import '../../css/d/d9_xmgbap.css';
import '../../css/m/ma15n6b7f.css';
import '../../css/y/yczoltybo.css';
import '../../css/g/g1clapw-o.css';
import '../../css/s/s3joiyb_w.css';
import '../../css/x/x0mq93b8i.css';
import '../../css/y/yspcrib1y.css';
import '../../css/d/dayvdlbbp.css';
import '../../css/y/y24q8if3h.css';
import '../../css/n/nr7-h1b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="exwrc0-ch"><path class="u_9ezcbip wm-shadow"/><path class="d9_xmgbap wm-shadow"/><path class="ma15n6b7f wm-shadow"/><path class="wm-shadow yczoltybo"/><path class="g1clapw-o wm-shadow"/><path class="s3joiyb_w wm-shadow"/><path class="wm-shadow x0mq93b8i"/><path class="wm-k yspcrib1y"/><path class="dayvdlbbp wm-a"/><path class="wm-k y24q8if3h"/><path class="nr7-h1b3i wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rose"} {...others} />);
}

export default Component;
