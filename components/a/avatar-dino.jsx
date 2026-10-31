import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkdcfyacc.css';
import '../../css/w/wyhf-z26z.css';
import '../../css/o/ossnbacjk.css';
import '../../css/g/g-n4qpmja.css';
import '../../css/o/ocalw-a2y.css';
import '../../css/i/ijfdurbtl.css';
import '../../css/q/qm_q2ubie.css';
import '../../css/o/opcyipbvb.css';
import '../../css/w/wauimvh7w.css';
import '../../css/r/r9pjaibmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow zkdcfyacc"/><path class="wyhf-z26z"/><path class="ossnbacjk"/><path class="g-n4qpmja"/><path class="ocalw-a2y"/><path class="ijfdurbtl"/><path class="qm_q2ubie"/><path class="opcyipbvb wm-shine"/><path class="wauimvh7w"/><path class="r9pjaibmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:avatar-dino"} {...others} />);
}

export default Component;
