import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/viooa-irp.css';
import '../../css/l/l2lvktqan.css';
import '../../css/p/p73kp-9sk.css';
import '../../css/a/aduy5acvd.css';
import '../../css/r/rwmrkpbqr.css';
import '../../css/b/bd7vbfbls.css';
import '../../css/c/cx9x5osrr.css';
import '../../css/y/ym-35ibzi.css';
import '../../css/h/hrpnofbff.css';
import '../../css/b/bj1_pz4-g.css';
import '../../css/c/cs--ckbws.css';
import '../../css/u/u6e2y3bwj.css';
import '../../css/s/s42uotbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="viooa-irp wm-shadow"/><path class="l2lvktqan wm-shadow"/><path class="p73kp-9sk"/><path class="aduy5acvd"/><path class="rwmrkpbqr"/><path class="bd7vbfbls"/><path class="cx9x5osrr"/><path class="ym-35ibzi"/><path class="hrpnofbff"/><path class="bj1_pz4-g"/><path class="cs--ckbws"/><path class="u6e2y3bwj"/><path class="s42uotbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:binoculars"} {...others} />);
}

export default Component;
