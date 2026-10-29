import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvo12scru.css';
import '../../css/c/cdb9-7bny.css';
import '../../css/v/vesn3gqhn.css';
import '../../css/v/vvlnvsqvf.css';
import '../../css/a/as8v7-qfr.css';
import '../../css/o/om__8-b-h.css';
import '../../css/q/qo-37p3ah.css';
import '../../css/x/xh28ezbdu.css';
import '../../css/h/hzmbve3or.css';
import '../../css/y/yyw18hijs.css';
import '../../css/c/c3bcmxpss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pvo12scru wm-a"/><path class="cdb9-7bny wm-a"/><path class="vesn3gqhn wm-a"/><path class="vvlnvsqvf wm-k"/><path class="as8v7-qfr wm-k"/><path class="om__8-b-h wm-k"/><path class="qo-37p3ah wm-shine"/><path class="wm-k xh28ezbdu"/><path class="hzmbve3or wm-k"/><path class="wm-k yyw18hijs"/><path class="c3bcmxpss wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:paint-roller"} {...others} />);
}

export default Component;
