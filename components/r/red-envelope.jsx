import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r-ep9g15p.css';
import '../../css/z/zqmfa-vfj.css';
import '../../css/a/ave7n_ava.css';
import '../../css/b/bnz432bqs.css';
import '../../css/a/a6psqc6zc.css';
import '../../css/k/kbstncbad.css';
import '../../css/m/mfqx1vbcq.css';
import '../../css/j/j1ycf0bfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r-ep9g15p wm-shadow"/><path class="wm-s zqmfa-vfj"/><path class="ave7n_ava wm-shadow"/><path class="bnz432bqs"/><path class="a6psqc6zc"/><path class="kbstncbad wm-s"/><path class="mfqx1vbcq wm-s"/><path class="j1ycf0bfx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:red-envelope"} {...others} />);
}

export default Component;
