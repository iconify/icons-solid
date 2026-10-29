import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/riaiovbpg.css';
import '../../css/z/z88xz2p7m.css';
import '../../css/u/uwjbsac3e.css';
import '../../css/j/jg5_y-bel.css';
import '../../css/g/gpr4l_biq.css';
import '../../css/i/icibgd6iz.css';
import '../../css/n/ni-yq_x0l.css';
import '../../css/s/sla7fzbhm.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="riaiovbpg wm-shadow"/><path class="z88xz2p7m"/><path class="uwjbsac3e"/><path class="jg5_y-bel"/><path class="gpr4l_biq"/><path class="icibgd6iz"/><path class="ni-yq_x0l"/><path class="sla7fzbhm wm-shine"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:component"} {...others} />);
}

export default Component;
