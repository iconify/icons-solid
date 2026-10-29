import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j2hfq7yut.css';
import '../../css/u/utcu75bbq.css';
import '../../css/f/fekadd-0i.css';
import '../../css/c/crs1h8qjk.css';
import '../../css/i/i45qcxbkp.css';
import '../../css/p/p9q1s-bjt.css';
import '../../css/c/cicno0bkk.css';
import '../../css/b/bn1gkobni.css';
import '../../css/a/a9gxtomno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="j2hfq7yut wm-shadow"/><path class="utcu75bbq"/><path class="fekadd-0i"/><path class="crs1h8qjk"/><path class="i45qcxbkp wm-shine"/><path class="p9q1s-bjt wm-s"/><path class="cicno0bkk wm-s"/><path class="bn1gkobni wm-s"/><path class="a9gxtomno wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:server-cog"} {...others} />);
}

export default Component;
