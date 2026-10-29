import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j7a_mcchu.css';
import '../../css/b/bo7h7eb1u.css';
import '../../css/s/slt82-mtx.css';
import '../../css/u/uw6lfdoxr.css';
import '../../css/k/kav41db5y.css';
import '../../css/v/v2vse3j8t.css';
import '../../css/r/rs7_5gblz.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="j7a_mcchu wm-shadow"/><path class="bo7h7eb1u"/><path class="slt82-mtx"/><path class="uw6lfdoxr"/><path class="kav41db5y"/><path class="v2vse3j8t"/><path class="rs7_5gblz wm-shine"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-woman-bun"} {...others} />);
}

export default Component;
