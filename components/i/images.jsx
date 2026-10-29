import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4gz1n29m.css';
import '../../css/j/j7220vbey.css';
import '../../css/l/lx4wmzjds.css';
import '../../css/k/kxt5pybqz.css';
import '../../css/b/bemvntbmb.css';
import '../../css/c/ct_0qm_pe.css';
import '../../css/q/qe7bygbti.css';
import '../../css/t/t1j-vfh9z.css';
import '../../css/z/ztgi2abgs.css';
import '../../css/l/l05gwhb4e.css';
import '../../css/x/x633frs2f.css';
import '../../css/w/wnffddw7j.css';
import '../../css/z/zu_3ozbbs.css';
import '../../css/y/yoiit1ble.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g4gz1n29m wm-k"/><path class="j7220vbey wm-k"/><path class="lx4wmzjds wm-k"/><path class="kxt5pybqz wm-k"/><path class="bemvntbmb wm-k"/><path class="ct_0qm_pe wm-k"/><path class="qe7bygbti wm-k"/><path class="t1j-vfh9z wm-k"/><path class="wm-k ztgi2abgs"/><path class="l05gwhb4e wm-a"/><path class="wm-a x633frs2f"/><path class="wm-a wnffddw7j"/><path class="wm-a zu_3ozbbs"/><path class="wm-a yoiit1ble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:images"} {...others} />);
}

export default Component;
