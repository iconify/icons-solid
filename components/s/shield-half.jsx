import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmgc55bae.css';
import '../../css/s/s1_1euq1u.css';
import '../../css/h/hz9f1tmmy.css';
import '../../css/e/enxx9bbuc.css';
import '../../css/g/gtdcizstd.css';
import '../../css/v/vxa3dwbwi.css';
import '../../css/d/dw3j_b7wz.css';
import '../../css/x/x2dlyn3gs.css';
import '../../css/r/rnnpo7bot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmgc55bae wm-shadow"/><path class="s1_1euq1u wm-k"/><path class="hz9f1tmmy wm-k"/><path class="enxx9bbuc wm-k"/><path class="gtdcizstd wm-k"/><path class="vxa3dwbwi wm-k"/><path class="dw3j_b7wz wm-shine"/><path class="wm-a x2dlyn3gs"/><path class="rnnpo7bot wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:shield-half"} {...others} />);
}

export default Component;
