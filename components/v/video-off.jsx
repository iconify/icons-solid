import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x59liab9r.css';
import '../../css/y/y917fqkxk.css';
import '../../css/p/pue_-j2vl.css';
import '../../css/m/mahnnyd-n.css';
import '../../css/b/bes_rr77k.css';
import '../../css/k/kufdfcb0s.css';
import '../../css/p/pu42e9z2v.css';
import '../../css/p/pjei-pbjt.css';
import '../../css/h/hxdn9gbth.css';
import '../../css/k/kl-gs9bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-a x59liab9r"/><path class="wm-a y917fqkxk"/><path class="pue_-j2vl wm-a"/><path class="mahnnyd-n wm-k"/><path class="bes_rr77k wm-k"/><path class="kufdfcb0s wm-k"/><path class="pu42e9z2v wm-shine"/><path class="pjei-pbjt wm-s"/><path class="hxdn9gbth wm-s"/><path class="kl-gs9bzp wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:video-off"} {...others} />);
}

export default Component;
