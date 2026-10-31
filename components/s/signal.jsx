import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/ztrt4stou.css';
import '../../css/u/u3it35-cp.css';
import '../../css/h/hy2zpeeom.css';
import '../../css/c/ch9c8pwdc.css';
import '../../css/h/h1kmcmdpb.css';
import '../../css/i/ig7decbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ztrt4stou"/><path class="u3it35-cp"/><path class="hy2zpeeom"/><path class="ch9c8pwdc"/><path class="h1kmcmdpb"/><path class="ig7decbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:signal"} {...others} />);
}

export default Component;
