import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-hool9ar.css';
import '../../css/t/t1whg5bhj.css';
import '../../css/t/tpi3gslak.css';
import '../../css/n/nv85ksbvt.css';
import '../../css/s/s1263jblt.css';
import '../../css/y/yv_o24b-u.css';
import '../../css/v/vn8gwccgu.css';
import '../../css/t/t174ywwjm.css';
import '../../css/p/pzspdy60i.css';
import '../../css/a/ay2drqwxz.css';
import '../../css/b/bl_pm-cdy.css';
import '../../css/u/u2rxcnb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="e-hool9ar wm-shadow"/><path class="t1whg5bhj wm-k"/><path class="tpi3gslak wm-k"/><path class="nv85ksbvt wm-k"/><path class="s1263jblt wm-s"/><path class="wm-deco yv_o24b-u"/><circle class="vn8gwccgu wm-deco"/><circle class="t174ywwjm wm-deco"/><circle class="pzspdy60i wm-deco"/><circle class="ay2drqwxz wm-deco"/><circle class="bl_pm-cdy wm-deco"/><path class="u2rxcnb_d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:egg"} {...others} />);
}

export default Component;
