import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y1i64tb-p.css';
import '../../css/t/tgln5lb2i.css';
import '../../css/b/byyvdhbmr.css';
import '../../css/q/qf60mrbeb.css';
import '../../css/p/ppypl8beg.css';
import '../../css/e/eokw49bln.css';
import '../../css/r/rdojcbbnj.css';
import '../../css/y/ytv9pib4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow y1i64tb-p"/><path class="tgln5lb2i"/><path class="byyvdhbmr"/><path class="qf60mrbeb"/><path class="ppypl8beg"/><path class="eokw49bln"/><path class="rdojcbbnj wm-shine"/><path class="wm-deco ytv9pib4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:save-all"} {...others} />);
}

export default Component;
