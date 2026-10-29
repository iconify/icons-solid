import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/ep3t2n6ok.css';
import '../../css/x/x3mkvbbup.css';
import '../../css/i/ij2hrbcfv.css';
import '../../css/d/dle1hli8h.css';
import '../../css/m/mx9f30n5a.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/r/rl1rttwal.css';
import '../../css/n/nvfbgacfn.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ep3t2n6ok wm-shadow"/><path class="x3mkvbbup"/><path class="ij2hrbcfv"/><path class="dle1hli8h"/><path class="mx9f30n5a wm-shine"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="rl1rttwal wm-s"/><path class="nvfbgacfn wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:star-off"} {...others} />);
}

export default Component;
