import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c40n24jcx.css';
import '../../css/a/a45glubee.css';
import '../../css/d/dyp1rabcy.css';
import '../../css/l/l5u520b2b.css';
import '../../css/k/ku-bc23ku.css';
import '../../css/o/oghv2-u-x.css';
import '../../css/u/u10l6401q.css';
import '../../css/t/t1bw_tcnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c40n24jcx wm-k"/><path class="a45glubee wm-k"/><path class="dyp1rabcy wm-k"/><path class="l5u520b2b wm-shine"/><path class="ku-bc23ku wm-a"/><path class="oghv2-u-x wm-s"/><path class="u10l6401q wm-s"/><path class="t1bw_tcnc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:clock-alert"} {...others} />);
}

export default Component;
