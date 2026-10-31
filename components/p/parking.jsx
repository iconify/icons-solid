import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pec53hqgb.css';
import '../../css/l/lzrxs7bvw.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/g/g609k_sva.css';
import '../../css/n/njbqaom9r.css';
import '../../css/u/uo6g5qbnb.css';
import '../../css/e/ee-uovb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pec53hqgb"/><path class="lzrxs7bvw"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num wm-k"/><path class="g609k_sva wm-a"/><path class="njbqaom9r"/><path class="uo6g5qbnb"/><path class="ee-uovb6p wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:parking"} {...others} />);
}

export default Component;
