import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwuzhgbxx.css';
import '../../css/s/s3u805b7l.css';
import '../../css/p/pun3o0heh.css';
import '../../css/h/hhpfp5bgi.css';
import '../../css/v/vnz-rbcwq.css';
import '../../css/o/o1pzbrboz.css';
import '../../css/a/aydik0enx.css';
import '../../css/m/mpf3c1b6k.css';
import '../../css/g/g2yz9_bfd.css';
import '../../css/k/ksa7f81sh.css';
import '../../css/u/uj-or1c6l.css';
import '../../css/k/kqd3-4yhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rwuzhgbxx wm-shadow"/><path class="s3u805b7l wm-shadow"/><path class="pun3o0heh"/><path class="hhpfp5bgi"/><path class="vnz-rbcwq"/><path class="o1pzbrboz"/><path class="aydik0enx wm-shine"/><path class="mpf3c1b6k wm-shine"/><path class="g2yz9_bfd"/><path class="ksa7f81sh"/><path class="uj-or1c6l"/><path class="kqd3-4yhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:avatar-monster-fluffy"} {...others} />);
}

export default Component;
