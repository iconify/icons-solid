import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhkhi2b3h.css';
import '../../css/l/lmj6o8bpx.css';
import '../../css/w/w33fmxben.css';
import '../../css/b/b4_p-gb2v.css';
import '../../css/w/wf88uebik.css';
import '../../css/k/k5_ncabkv.css';
import '../../css/o/ohork5tmj.css';
import '../../css/p/pt1u8gbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jhkhi2b3h wm-k"/><path class="lmj6o8bpx wm-deco"/><path class="w33fmxben wm-k"/><path class="b4_p-gb2v wm-k"/><path class="wf88uebik wm-shadow"/><path class="k5_ncabkv wm-shine"/><path class="ohork5tmj wm-shine"/><path class="pt1u8gbpk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:book-open-check"} {...others} />);
}

export default Component;
