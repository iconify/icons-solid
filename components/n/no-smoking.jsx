import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjma1yhgw.css';
import '../../css/e/exg5t-bvs.css';
import '../../css/y/yu54b04_b.css';
import '../../css/y/yi3jdwbhm.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/q/qzb38lbzx.css';
import '../../css/j/jmbdu6lwh.css';
import '../../css/j/jmza3plhf.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="yjma1yhgw"/><path class="exg5t-bvs"/><path class="yu54b04_b"/><path class="yi3jdwbhm"/><g class="rpvb-o6bq"><path class="qzb38lbzx"/><circle class="jmbdu6lwh"/><path class="jmza3plhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:no-smoking"} {...others} />);
}

export default Component;
