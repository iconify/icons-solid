import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0ipv_bzo.css';
import '../../css/r/r43alcbdt.css';
import '../../css/k/kv_uwecic.css';
import '../../css/b/bw9vb6bnq.css';
import '../../css/q/qbk6cojig.css';
import '../../css/m/mj_kokoad.css';
import '../../css/v/v8q72_g4w.css';
import '../../css/m/mqi-oz9qb.css';
import '../../css/v/v77syhwoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a0ipv_bzo wm-shadow"/><path class="r43alcbdt wm-shadow"/><path class="kv_uwecic"/><path class="bw9vb6bnq"/><path class="qbk6cojig"/><path class="mj_kokoad"/><path class="v8q72_g4w wm-shine"/><path class="mqi-oz9qb wm-shine"/><path class="v77syhwoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chevrons-right"} {...others} />);
}

export default Component;
