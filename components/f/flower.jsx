import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei4yef1_r.css';
import '../../css/d/d9s4-pbel.css';
import '../../css/p/pna3ev3fr.css';
import '../../css/m/ma2i1_b2s.css';
import '../../css/a/a9pn1jf4u.css';
import '../../css/h/hwof66b3w.css';
import '../../css/l/lsf095b4h.css';
import '../../css/c/cs8zfibxh.css';
import '../../css/t/tt86nrb5h.css';
import '../../css/c/cyd46ib0g.css';
import '../../css/j/j7ccqm5tf.css';
import '../../css/v/vxov22keu.css';
import '../../css/b/b1nn90b8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ei4yef1_r wm-shadow"/><path class="d9s4-pbel wm-k"/><path class="pna3ev3fr wm-k"/><path class="ma2i1_b2s wm-k"/><path class="a9pn1jf4u wm-k"/><path class="hwof66b3w wm-k"/><path class="lsf095b4h wm-shine"/><path class="cs8zfibxh wm-a"/><path class="tt86nrb5h wm-a"/><path class="cyd46ib0g wm-a"/><path class="j7ccqm5tf wm-a"/><path class="vxov22keu wm-a"/><path class="b1nn90b8i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:flower"} {...others} />);
}

export default Component;
