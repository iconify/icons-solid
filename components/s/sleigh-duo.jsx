import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/luw39ft7l.css';
import '../../css/x/xh1b6ubxr.css';
import '../../css/t/ti18yabmh.css';
import '../../css/t/t0axcbk6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="luw39ft7l"/><path class="wm-a xh1b6ubxr"/><path class="ti18yabmh"/><path class="t0axcbk6e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sleigh-duo"} {...others} />);
}

export default Component;
