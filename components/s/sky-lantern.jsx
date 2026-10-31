import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xsthdprds.css';
import '../../css/l/l905rqxrz.css';
import '../../css/c/cp9xf13rx.css';
import '../../css/q/q2i6b1bjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xsthdprds"/><path class="l905rqxrz"/><path class="cp9xf13rx"/><path class="q2i6b1bjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sky-lantern"} {...others} />);
}

export default Component;
