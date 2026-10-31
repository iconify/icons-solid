import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o29sx2bai.css';
import '../../css/o/o5en_e_uy.css';
import '../../css/l/l1p_wtzlp.css';
import '../../css/t/t20iil5tj.css';
import '../../css/v/v2ukonb-w.css';
import '../../css/p/ppgi3vj8t.css';
import '../../css/u/u3oogkvcn.css';
import '../../css/t/tcolwsjou.css';
import '../../css/u/u7_zj_bsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="o29sx2bai"/><path class="o5en_e_uy"/><path class="l1p_wtzlp"/><path class="t20iil5tj wm-shine"/><path class="v2ukonb-w wm-k"/><path class="ppgi3vj8t wm-a"/><path class="u3oogkvcn"/><path class="tcolwsjou"/><path class="u7_zj_bsb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:map-pin"} {...others} />);
}

export default Component;
