import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/iie890bwi.css';
import '../../css/m/mk1qtq87x.css';
import '../../css/z/zlt_c4bba.css';
import '../../css/l/lyfke_t-m.css';
import '../../css/t/t860u6bke.css';
import '../../css/r/rxdubkyav.css';
import '../../css/w/whbssp2lc.css';
import '../../css/a/a-ac_-bsc.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="iie890bwi wm-shadow"/><path class="mk1qtq87x"/><path class="zlt_c4bba"/><path class="lyfke_t-m"/><path class="t860u6bke"/><path class="rxdubkyav wm-shine"/><path class="whbssp2lc wm-s"/><path class="a-ac_-bsc wm-s"/><path class="g4jl-u_xd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:love-letter"} {...others} />);
}

export default Component;
