import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zww9swb3r.css';
import '../../css/c/cu_i1zbeb.css';
import '../../css/n/nsbud83oe.css';
import '../../css/l/lh__zib2u.css';
import '../../css/h/hiz8dwibx.css';
import '../../css/r/rr_shubcg.css';
import '../../css/k/kf_969ijv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zww9swb3r"/><path class="cu_i1zbeb"/><path class="nsbud83oe"/><path class="lh__zib2u"/><path class="hiz8dwibx"/><path class="rr_shubcg wm-shine"/><path class="kf_969ijv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:library"} {...others} />);
}

export default Component;
