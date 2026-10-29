import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/llbpz6grk.css';
import '../../css/o/omm__pbbn.css';
import '../../css/s/sz2rn0m6u.css';
import '../../css/r/r663b__ir.css';
import '../../css/b/bubjsjbzb.css';
import '../../css/h/hx71cnbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="llbpz6grk wm-shadow"/><path class="omm__pbbn"/><path class="sz2rn0m6u"/><path class="r663b__ir"/><path class="bubjsjbzb wm-shine"/><path class="hx71cnbdn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-big-up"} {...others} />);
}

export default Component;
