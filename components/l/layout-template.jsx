import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnh2udbsk.css';
import '../../css/g/gjabq4bjr.css';
import '../../css/l/ltrsrrbft.css';
import '../../css/t/t60qp-b4l.css';
import '../../css/r/rpy9fkm7d.css';
import '../../css/q/qpp6g_j0u.css';
import '../../css/i/iown-qe7i.css';
import '../../css/u/u26xvwb3b.css';
import '../../css/k/k7s7yr8as.css';
import '../../css/t/t6e8s0jdz.css';
import '../../css/t/tlzs2d57l.css';
import '../../css/d/dvvcnnbut.css';
import '../../css/m/ma_533ekj.css';
import '../../css/r/rwex3lb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hnh2udbsk wm-shadow"/><path class="gjabq4bjr wm-k"/><path class="ltrsrrbft wm-k"/><path class="t60qp-b4l wm-k"/><path class="rpy9fkm7d wm-k"/><path class="qpp6g_j0u wm-k"/><path class="iown-qe7i wm-shine"/><path class="u26xvwb3b wm-k"/><path class="k7s7yr8as wm-k"/><path class="t6e8s0jdz wm-k"/><path class="tlzs2d57l wm-k"/><path class="dvvcnnbut wm-k"/><path class="ma_533ekj wm-a"/><path class="rwex3lb9s wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:layout-template"} {...others} />);
}

export default Component;
