import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/misgkob_n.css';
import '../../css/p/pgmx4yxpg.css';
import '../../css/k/kud9vtbun.css';
import '../../css/e/e6cp8fboe.css';
import '../../css/o/olnrm1vwv.css';
import '../../css/z/zzrdq5b7w.css';
import '../../css/f/fr73kpu6t.css';
import '../../css/q/q9fsdgx4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="misgkob_n wm-shadow"/><path class="pgmx4yxpg"/><path class="kud9vtbun"/><path class="e6cp8fboe"/><path class="olnrm1vwv"/><path class="zzrdq5b7w"/><path class="fr73kpu6t wm-shine"/><path class="q9fsdgx4f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:shopping-bag"} {...others} />);
}

export default Component;
