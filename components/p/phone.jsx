import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vuedky_oe.css';
import '../../css/j/jz5yjsbib.css';
import '../../css/t/ta2sw_bss.css';
import '../../css/l/lfatpwbph.css';
import '../../css/m/mmdazb-8i.css';
import '../../css/q/q_b807bxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="vuedky_oe"/><path class="jz5yjsbib"/><path class="ta2sw_bss"/><path class="lfatpwbph"/><path class="mmdazb-8i"/><path class="q_b807bxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:phone"} {...others} />);
}

export default Component;
