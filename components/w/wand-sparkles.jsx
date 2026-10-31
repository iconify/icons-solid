import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/y/y01450vks.css';
import '../../css/b/bzrik6wpx.css';
import '../../css/q/q_qdu3syv.css';
import '../../css/q/q1lnlop7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGri5PZc5B" x1="2.05" x2="22.25" y1="1.5" y2="21.95" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGri5PZc5B)" class="wm-k y01450vks"/><path class="bzrik6wpx wm-a"/><path class="q_qdu3syv wm-shine"/><path class="q1lnlop7d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:wand-sparkles"} {...others} />);
}

export default Component;
