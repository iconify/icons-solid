import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/ww6u_nbyl.css';
import '../../css/b/bzh-t-bjn.css';
import '../../css/g/g05d-ibom.css';
import '../../css/w/wv_gk3esz.css';
import '../../css/h/h3g1mubax.css';
import '../../css/y/yojn4lbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ww6u_nbyl"/><path class="bzh-t-bjn"/><path class="g05d-ibom"/><path class="wv_gk3esz"/><path class="h3g1mubax"/><path class="yojn4lbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chart-funnel"} {...others} />);
}

export default Component;
