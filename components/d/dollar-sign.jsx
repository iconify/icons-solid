import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwten9bzc.css';
import '../../css/a/aygmzri0u.css';
import '../../css/q/qrvwvuxtk.css';
import '../../css/a/ar1oxvbno.css';
import '../../css/y/ygvahxbzc.css';
import '../../css/b/b963efbrf.css';
import '../../css/r/r06oil5uw.css';
import '../../css/o/oidqxacsb.css';
import '../../css/s/sbtxn59uy.css';
import '../../css/h/h6_jp3bxc.css';
import '../../css/v/vrobvaclu.css';
import '../../css/f/fx99qp_la.css';
import '../../css/g/gmwh-eb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow zwten9bzc"/><path class="aygmzri0u wm-a"/><path class="qrvwvuxtk wm-a"/><path class="ar1oxvbno wm-a"/><path class="wm-a ygvahxbzc"/><path class="b963efbrf wm-a"/><path class="r06oil5uw wm-a"/><path class="oidqxacsb wm-k"/><path class="sbtxn59uy wm-k"/><path class="h6_jp3bxc wm-k"/><path class="vrobvaclu wm-k"/><path class="fx99qp_la wm-k"/><path class="gmwh-eb-l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:dollar-sign"} {...others} />);
}

export default Component;
