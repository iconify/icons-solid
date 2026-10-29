import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e07p87bga.css';
import '../../css/f/fx2_ttbmw.css';
import '../../css/o/oq_acbclj.css';
import '../../css/s/soc2g0bzj.css';
import '../../css/a/ak5q78biy.css';
import '../../css/r/rk9mu5bct.css';
import '../../css/o/ocp990k_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e07p87bga wm-k"/><path class="fx2_ttbmw wm-k"/><path class="oq_acbclj wm-shadow"/><path class="soc2g0bzj wm-k"/><path class="ak5q78biy wm-a"/><path class="rk9mu5bct wm-k"/><path class="ocp990k_b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:store-engrave"} {...others} />);
}

export default Component;
