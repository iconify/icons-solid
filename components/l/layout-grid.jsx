import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xymonk2xk.css';
import '../../css/l/lgvql2gct.css';
import '../../css/g/g6tbghb9g.css';
import '../../css/f/fvury-90w.css';
import '../../css/w/wj15btluw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xymonk2xk"/><path class="lgvql2gct"/><path class="g6tbghb9g"/><path class="fvury-90w"/><path class="wj15btluw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:layout-grid"} {...others} />);
}

export default Component;
