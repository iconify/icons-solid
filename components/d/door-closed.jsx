import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohst1wejn.css';
import '../../css/o/o7-iz_bhg.css';
import '../../css/g/go_-edupe.css';
import '../../css/h/h814gdbfw.css';
import '../../css/q/qfprr-b6g.css';
import '../../css/y/yma6_pbuo.css';
import '../../css/v/v_d988bed.css';
import '../../css/t/t43mdj6_o.css';
import '../../css/a/ao7c5pb0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ohst1wejn wm-shadow"/><path class="o7-iz_bhg wm-shadow"/><path class="go_-edupe"/><path class="h814gdbfw"/><path class="qfprr-b6g"/><path class="yma6_pbuo"/><path class="v_d988bed"/><path class="t43mdj6_o"/><path class="ao7c5pb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:door-closed"} {...others} />);
}

export default Component;
