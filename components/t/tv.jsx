import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnt-aackv.css';
import '../../css/o/oaefn9bmp.css';
import '../../css/f/fl68bvbhn.css';
import '../../css/k/k2si_jpec.css';
import '../../css/x/xaahzx0aa.css';
import '../../css/a/a2zbolbia.css';
import '../../css/y/yvd-xjbre.css';
import '../../css/n/n4mzczbrk.css';
import '../../css/e/ey5qvcckh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gnt-aackv wm-k"/><path class="oaefn9bmp wm-a"/><path class="fl68bvbhn wm-deco"/><path class="k2si_jpec wm-k"/><path class="wm-k xaahzx0aa"/><path class="a2zbolbia wm-a"/><path class="wm-shadow yvd-xjbre"/><path class="n4mzczbrk wm-shine"/><path class="ey5qvcckh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:tv"} {...others} />);
}

export default Component;
