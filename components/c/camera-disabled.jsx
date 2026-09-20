import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wl_zx02mu.css';
import '../../css/u/u_9u68bgf.css';
import '../../css/i/i9d4f1bhz.css';
import '../../css/x/x_861_b_q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wl_zx02mu"/><path class="u_9u68bgf"/><path class="i9d4f1bhz"/><path class="x_861_b_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:camera-disabled"} {...others} />);
}

export default Component;
