import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/ku5ljmbzl.css';
import '../../css/m/m-4nz2btc.css';
import '../../css/j/jw8iy782h.css';
import '../../css/o/otw4adbga.css';
import '../../css/o/oof_cu6mn.css';
import '../../css/q/q4p5u9bfj.css';
import '../../css/t/t1ph39h0l.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ku5ljmbzl wm-shadow"/><path class="m-4nz2btc"/><path class="jw8iy782h"/><path class="otw4adbga"/><path class="oof_cu6mn"/><path class="q4p5u9bfj"/><path class="t1ph39h0l wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:diya"} {...others} />);
}

export default Component;
