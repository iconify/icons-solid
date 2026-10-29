import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz-wwszvi.css';
import '../../css/t/t51e9mb3u.css';
import '../../css/h/h8u3gi_6c.css';
import '../../css/v/v-et2cbgp.css';
import '../../css/n/ndc3u-b1w.css';
import '../../css/e/eq2x4n_ow.css';
import '../../css/e/ew1n10ica.css';
import '../../css/x/xa175o9vk.css';
import '../../css/f/fj-dgqt_j.css';
import '../../css/k/kozx8qk4n.css';
import '../../css/a/aqy311bit.css';
import '../../css/h/hwdffdbgy.css';
import '../../css/n/npm5nijrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mz-wwszvi wm-shadow"/><path class="t51e9mb3u wm-k"/><path class="h8u3gi_6c wm-k"/><path class="v-et2cbgp wm-k"/><path class="ndc3u-b1w wm-k"/><path class="eq2x4n_ow wm-shine"/><path class="ew1n10ica wm-k"/><path class="wm-a xa175o9vk"/><path class="fj-dgqt_j wm-a"/><path class="kozx8qk4n wm-a"/><path class="aqy311bit wm-a"/><path class="hwdffdbgy wm-a"/><path class="npm5nijrd wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:gift-stack"} {...others} />);
}

export default Component;
