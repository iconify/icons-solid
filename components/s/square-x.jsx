import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erpis30sd.css';
import '../../css/y/yulfdub8q.css';
import '../../css/t/ttrpi1yzl.css';
import '../../css/q/q27a_xbyb.css';
import '../../css/b/bspr2ac5z.css';
import '../../css/q/qlmfwlbtg.css';
import '../../css/j/j3hsr-b9o.css';
import '../../css/e/e8o4ap5xv.css';
import '../../css/q/qtdo0wbha.css';
import '../../css/d/d_ip2ybbf.css';
import '../../css/s/sq88dubwb.css';
import '../../css/c/csomju06n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="erpis30sd wm-shadow"/><path class="wm-shadow yulfdub8q"/><path class="ttrpi1yzl"/><path class="q27a_xbyb"/><path class="bspr2ac5z"/><path class="qlmfwlbtg"/><path class="j3hsr-b9o wm-shine"/><path class="e8o4ap5xv wm-shine"/><path class="qtdo0wbha"/><path class="d_ip2ybbf"/><path class="sq88dubwb"/><path class="csomju06n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:square-x"} {...others} />);
}

export default Component;
