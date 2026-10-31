import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhkkq1b4l.css';
import '../../css/p/pfqig7-ke.css';
import '../../css/s/sbtudlpxf.css';
import '../../css/v/vdw2yf8mj.css';
import '../../css/t/tgvax9bop.css';
import '../../css/k/k7ae-7brq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xhkkq1b4l"/><path class="pfqig7-ke wm-deco"/><path class="sbtudlpxf wm-k"/><path class="vdw2yf8mj wm-shadow"/><path class="tgvax9bop wm-shine"/><path class="k7ae-7brq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:football"} {...others} />);
}

export default Component;
