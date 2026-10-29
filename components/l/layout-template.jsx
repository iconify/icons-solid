import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/caq3x2btc.css';
import '../../css/n/n0uz2db_z.css';
import '../../css/z/zuqva0ker.css';
import '../../css/e/ellmqcbhc.css';
import '../../css/p/pn6xe6bgg.css';
import '../../css/h/h5pbaqosm.css';
import '../../css/y/y90fzneya.css';
import '../../css/z/z5fog596m.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="caq3x2btc wm-shadow"/><path class="n0uz2db_z"/><path class="zuqva0ker"/><path class="ellmqcbhc"/><path class="pn6xe6bgg"/><path class="h5pbaqosm"/><path class="y90fzneya"/><path class="wm-shine z5fog596m"/><path class="sloj1fjmk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:layout-template"} {...others} />);
}

export default Component;
