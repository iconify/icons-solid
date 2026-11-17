import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/ngufe1b_r.css';
import '../../css/o/oaudb_mqv.css';
import '../../css/s/s7rkgo06q.css';
import '../../css/a/aopeiubkt.css';
import '../../css/q/q_splzqfy.css';
import '../../css/v/vj_ijob-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ngufe1b_r"/><path class="oaudb_mqv"/><path class="s7rkgo06q"/><path class="aopeiubkt"/><path class="q_splzqfy"/><path class="vj_ijob-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:shield-exclamation-point"} {...others} />);
}

export default Component;
