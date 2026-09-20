import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/u/uep8a6bjl.css';
import '../../css/w/whuonmbsk.css';
import '../../css/q/qzng0hhev.css';
import '../../css/u/uacajdbbc.css';
import '../../css/r/raphvibhn.css';
import '../../css/c/cjxzckb3x.css';
import '../../css/i/i4ctr12sy.css';
import '../../css/m/m8tiflbie.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="uep8a6bjl"/><path clip-rule="evenodd" class="whuonmbsk"/><path class="qzng0hhev"/><path clip-rule="evenodd" class="uacajdbbc"/></g><path class="raphvibhn"/><path clip-rule="evenodd" class="cjxzckb3x"/><path clip-rule="evenodd" class="i4ctr12sy"/><path clip-rule="evenodd" class="m8tiflbie"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:cellphone-loop-off"} {...others} />);
}

export default Component;
