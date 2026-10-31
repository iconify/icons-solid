import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzem2mote.css';
import '../../css/j/jz2l5lb9s.css';
import '../../css/g/g-7qc8ury.css';
import '../../css/e/eq11jyqdp.css';
import '../../css/r/r6_y7fbok.css';
import '../../css/r/r7v5vng2w.css';
import '../../css/w/wrcfb73od.css';
import '../../css/u/u2yh0ob6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qzem2mote wm-k"/><path class="jz2l5lb9s wm-s"/><path class="g-7qc8ury wm-deco"/><path class="eq11jyqdp wm-k"/><path class="r6_y7fbok wm-s"/><path class="r7v5vng2w wm-shadow"/><path class="wm-shine wrcfb73od"/><path class="u2yh0ob6k wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:cloud-download"} {...others} />);
}

export default Component;
