import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2_jz2bon.css';
import '../../css/p/pkx04hbab.css';
import '../../css/r/rp8_3r5zy.css';
import '../../css/d/d6any90_v.css';
import '../../css/d/deawrs91q.css';
import '../../css/e/ea2aqs3yp.css';
import '../../css/p/pxfnjxb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n2_jz2bon wm-k"/><path class="pkx04hbab wm-k"/><path class="rp8_3r5zy wm-k"/><path class="d6any90_v wm-a"/><path class="deawrs91q wm-shine"/><path class="ea2aqs3yp wm-deco"/><path class="pxfnjxb2d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cookie"} {...others} />);
}

export default Component;
