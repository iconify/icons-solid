import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0gzfccvi.css';
import '../../css/m/mtcu572ku.css';
import '../../css/c/cktdsfp8f.css';
import '../../css/d/di82-tbhp.css';
import '../../css/b/bzwtprb5k.css';
import '../../css/t/t_yxl98ro.css';
import '../../css/u/ubw0ok-yx.css';
import '../../css/p/pv_vqhb_o.css';
import '../../css/q/qcn55tbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t0gzfccvi wm-shadow"/><path class="mtcu572ku wm-shadow"/><path class="cktdsfp8f"/><path class="di82-tbhp"/><path class="bzwtprb5k"/><path class="t_yxl98ro"/><path class="ubw0ok-yx wm-shine"/><path class="pv_vqhb_o wm-shine"/><path class="qcn55tbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:audio-waveform"} {...others} />);
}

export default Component;
