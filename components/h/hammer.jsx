import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m9sk83o5r.css';
import '../../css/g/g_hd3lbum.css';
import '../../css/z/zd20enb3d.css';
import '../../css/b/bymvde02m.css';
import '../../css/q/qytl4uz5m.css';
import '../../css/t/t2mqaiukt.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="m9sk83o5r wm-shadow"/><path class="g_hd3lbum"/><path class="zd20enb3d"/><path class="bymvde02m"/><path class="qytl4uz5m"/><path class="t2mqaiukt wm-shine"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:hammer"} {...others} />);
}

export default Component;
