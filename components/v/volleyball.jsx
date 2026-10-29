import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cnc_n1yuq.css';
import '../../css/v/vrsx33bwd.css';
import '../../css/j/jk_3i_j5p.css';
import '../../css/a/at58edq_m.css';
import '../../css/n/nny-pytao.css';
import '../../css/i/ii1hn--6r.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="cnc_n1yuq wm-shadow"/><path class="vrsx33bwd"/><path class="jk_3i_j5p"/><path class="at58edq_m"/><path class="nny-pytao wm-shine"/><path class="ii1hn--6r wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:volleyball"} {...others} />);
}

export default Component;
