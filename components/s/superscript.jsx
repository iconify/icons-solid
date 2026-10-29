import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xlhj_xbyd.css';
import '../../css/x/x9h0chhbm.css';
import '../../css/m/mo9jed56c.css';
import '../../css/z/zmc_77bxx.css';
import '../../css/l/lom5babqj.css';
import '../../css/p/p7wnxsncr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xlhj_xbyd"/><path class="x9h0chhbm"/><path class="mo9jed56c"/><path class="zmc_77bxx"/><path class="lom5babqj wm-shine"/><path class="p7wnxsncr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:superscript"} {...others} />);
}

export default Component;
