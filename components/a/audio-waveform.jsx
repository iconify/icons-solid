import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lmnfc7bmy.css';
import '../../css/c/cw0d_cc2j.css';
import '../../css/p/pdvmbvx3k.css';
import '../../css/i/ikkf01bwy.css';
import '../../css/n/n9s0w5h3x.css';
import '../../css/q/qp7t5tt8y.css';
import '../../css/o/o2q2h076v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lmnfc7bmy wm-shadow"/><path class="cw0d_cc2j wm-k"/><path class="pdvmbvx3k wm-k"/><path class="ikkf01bwy wm-k"/><path class="n9s0w5h3x wm-k"/><path class="qp7t5tt8y wm-k"/><path class="o2q2h076v wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:audio-waveform"} {...others} />);
}

export default Component;
