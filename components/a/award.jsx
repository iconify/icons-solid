import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hwr_f4gfl.css';
import '../../css/y/yyoc70orc.css';
import '../../css/l/lv_aytbdx.css';
import '../../css/p/p3ud8bnaz.css';
import '../../css/u/uddtj0b8b.css';
import '../../css/q/q90-xnbns.css';
import '../../css/h/hw0l3b_4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hwr_f4gfl wm-shadow"/><path class="yyoc70orc"/><path class="lv_aytbdx"/><path class="p3ud8bnaz"/><path class="uddtj0b8b"/><path class="q90-xnbns wm-shine"/><path class="hw0l3b_4d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:award"} {...others} />);
}

export default Component;
