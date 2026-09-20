import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgi6pub7n.css';
import '../../css/h/hq1q1_bns.css';
import '../../css/s/sj82blbju.css';
import '../../css/w/w28pm4ojh.css';
import '../../css/t/tio8qjb8d.css';
import '../../css/s/sc7p672ga.css';
import '../../css/z/zfdq7oymo.css';
import '../../css/t/todndexmr.css';
import '../../css/z/zf8d1fnvg.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tgi6pub7n"/><path class="hq1q1_bns"/><path class="sj82blbju"/><path class="w28pm4ojh"/><path class="tio8qjb8d"/><path class="sc7p672ga"/><path class="zfdq7oymo"/><path class="todndexmr"/><path clip-rule="evenodd" class="zf8d1fnvg"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bacteria-outline"} {...others} />);
}

export default Component;
