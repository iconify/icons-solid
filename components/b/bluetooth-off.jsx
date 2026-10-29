import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lazsc1z2p.css';
import '../../css/q/q12egz8tn.css';
import '../../css/e/e87h1r-iy.css';
import '../../css/c/ctfnl6ejt.css';
import '../../css/s/s34lxd4wp.css';
import '../../css/g/gmx955bju.css';
import '../../css/q/qmgkb2bgv.css';
import '../../css/p/pjqqaqb6w.css';
import '../../css/v/v-0kyqcnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lazsc1z2p wm-shadow"/><path class="q12egz8tn wm-k"/><path class="e87h1r-iy wm-k"/><path class="ctfnl6ejt wm-k"/><path class="s34lxd4wp wm-k"/><path class="gmx955bju wm-k"/><path class="qmgkb2bgv wm-shine"/><path class="pjqqaqb6w wm-s"/><path class="v-0kyqcnl wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bluetooth-off"} {...others} />);
}

export default Component;
