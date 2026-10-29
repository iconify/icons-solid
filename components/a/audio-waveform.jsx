import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip5b0mbhg.css';
import '../../css/l/latngabpx.css';
import '../../css/i/i19wbp_qm.css';
import '../../css/d/duip08bnx.css';
import '../../css/a/aoqyboblb.css';
import '../../css/n/nk13tybwv.css';
import '../../css/a/ao8lmm64t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ip5b0mbhg wm-shadow"/><path class="latngabpx wm-k"/><path class="i19wbp_qm wm-k"/><path class="duip08bnx wm-k"/><path class="aoqyboblb wm-k"/><path class="nk13tybwv wm-k"/><path class="ao8lmm64t wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:audio-waveform"} {...others} />);
}

export default Component;
