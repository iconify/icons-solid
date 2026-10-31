import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fordhdcpa.css';
import '../../css/o/oq33-bm2n.css';
import '../../css/p/p-vr61-re.css';
import '../../css/y/yb9snzb8p.css';
import '../../css/y/y6kt3ebfn.css';
import '../../css/q/qj06c4bni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fordhdcpa wm-shadow"/><path class="oq33-bm2n wm-k"/><path class="p-vr61-re wm-k"/><path class="wm-k yb9snzb8p"/><path class="wm-k y6kt3ebfn"/><path class="qj06c4bni wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:heart-crack"} {...others} />);
}

export default Component;
