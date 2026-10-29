import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf1qz3buz.css';
import '../../css/q/qiccuybkc.css';
import '../../css/h/hqxn3pbxt.css';
import '../../css/w/whsappbva.css';
import '../../css/z/zheadebma.css';
import '../../css/t/txx6vvbgo.css';
import '../../css/l/l7qwi2rvs.css';
import '../../css/o/op-o2bhlj.css';
import '../../css/g/gs_h9wbzc.css';
import '../../css/z/z3mqllbho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vf1qz3buz wm-shadow"/><path class="qiccuybkc wm-shadow"/><path class="hqxn3pbxt"/><path class="whsappbva"/><path class="zheadebma"/><path class="txx6vvbgo"/><path class="l7qwi2rvs"/><path class="op-o2bhlj wm-shine"/><path class="gs_h9wbzc wm-shine"/><path class="z3mqllbho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:square-dashed"} {...others} />);
}

export default Component;
