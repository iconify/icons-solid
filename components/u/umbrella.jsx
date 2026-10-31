import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xrq-c3b5e.css';
import '../../css/l/l3yqu5b4x.css';
import '../../css/w/ww9he6boj.css';
import '../../css/v/vta5wabim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xrq-c3b5e"/><path class="l3yqu5b4x"/><path class="ww9he6boj"/><path class="vta5wabim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:umbrella"} {...others} />);
}

export default Component;
