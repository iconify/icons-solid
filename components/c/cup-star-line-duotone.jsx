import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xnxq2c_2x.css';
import '../../css/i/isbq27bhw.css';
import '../../css/d/d83pj63ue.css';
import '../../css/j/j17hywdzm.css';
import '../../css/p/psv6jlkbl.css';
import '../../css/i/iebli22xk.css';
import '../../css/l/lm483pb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xnxq2c_2x"/><path class="isbq27bhw"/><path class="d83pj63ue"/><path class="j17hywdzm"/><path class="psv6jlkbl"/><path class="iebli22xk"/><path class="lm483pb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-star-line-duotone"} {...others} />);
}

export default Component;
