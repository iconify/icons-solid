import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kejmp17tu.css';
import '../../css/w/ww7_lhbdo.css';
import '../../css/g/gn-eysbkx.css';
import '../../css/w/w62ub4b1s.css';
import '../../css/j/jnteq4brz.css';
import '../../css/s/scwu8gbdc.css';
import '../../css/d/d4zyesz7j.css';
import '../../css/f/f_lx5gb-o.css';
import '../../css/j/jir5pwb0n.css';
import '../../css/j/js6p8idin.css';
import '../../css/z/znhmcya2i.css';
import '../../css/e/e1gf4zb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kejmp17tu wm-shadow"/><path class="ww7_lhbdo"/><path class="gn-eysbkx"/><path class="w62ub4b1s wm-a"/><path class="jnteq4brz wm-a"/><path class="scwu8gbdc"/><path class="d4zyesz7j wm-a"/><path class="f_lx5gb-o wm-shine"/><path class="jir5pwb0n wm-s"/><path class="js6p8idin wm-s"/><path class="wm-s znhmcya2i"/><path class="e1gf4zb7k wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:image-plus"} {...others} />);
}

export default Component;
