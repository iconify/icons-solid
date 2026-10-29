import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyu-svbro.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/ldyw0jbfz.css';
import '../../css/n/n-5uuvb5i.css';
import '../../css/v/vqdm78bbt.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c4ljlix0t.css';
import '../../css/h/hh9kc10jk.css';
import '../../css/c/c8ii3bz0h.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGrG78Ndwt" class="tyu-svbro"/></defs><g class="t_2lkqbxb"><path class="ldyw0jbfz wm-shadow"/><path class="n-5uuvb5i"/><path class="vqdm78bbt"/><use href="#SVGrG78Ndwt" class="d2kvgvbvc"/><path class="c4ljlix0t"/><use href="#SVGrG78Ndwt" class="d2kvgvbvc"/><path class="hh9kc10jk"/><path class="c8ii3bz0h"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:battery"} {...others} />);
}

export default Component;
