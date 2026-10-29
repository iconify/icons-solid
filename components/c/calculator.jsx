import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tcmdo-xmr.css';
import '../../css/t/t8q5qtb_h.css';
import '../../css/j/j4f6dzbvb.css';
import '../../css/y/yd-a_v-ct.css';
import '../../css/n/n16lovbai.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tcmdo-xmr wm-shadow"/><path class="t8q5qtb_h"/><path class="j4f6dzbvb"/><path class="yd-a_v-ct"/><path class="n16lovbai wm-shine"/><path class="qef_sobyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:calculator"} {...others} />);
}

export default Component;
