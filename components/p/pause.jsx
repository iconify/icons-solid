import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zxsi2jbiy.css';
import '../../css/n/n85129bif.css';
import '../../css/v/vpy6013he.css';
import '../../css/z/zzcuodk8p.css';
import '../../css/w/w_--o6bdq.css';
import '../../css/s/s9awmvb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zxsi2jbiy"/><path class="n85129bif"/><path class="vpy6013he"/><path class="zzcuodk8p"/><path class="w_--o6bdq"/><path class="s9awmvb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pause"} {...others} />);
}

export default Component;
