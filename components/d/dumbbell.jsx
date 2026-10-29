import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvmr3kb8u.css';
import '../../css/e/ei86isbau.css';
import '../../css/u/uaj0hjbmt.css';
import '../../css/h/h5mt2h83a.css';
import '../../css/b/bmqws5nrn.css';
import '../../css/t/tomo2msap.css';
import '../../css/h/hx0mpjcng.css';
import '../../css/k/ksrn3acqz.css';
import '../../css/k/klxlqte_q.css';
import '../../css/o/o-trz24sh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvmr3kb8u wm-shadow"/><path class="ei86isbau wm-k"/><path class="uaj0hjbmt wm-k"/><path class="h5mt2h83a wm-k"/><path class="bmqws5nrn wm-k"/><path class="tomo2msap wm-k"/><path class="hx0mpjcng wm-k"/><path class="ksrn3acqz wm-shine"/><path class="klxlqte_q wm-k"/><path class="o-trz24sh wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:dumbbell"} {...others} />);
}

export default Component;
