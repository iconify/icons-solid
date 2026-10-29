import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b4mg8acou.css';
import '../../css/m/mf09cfm0a.css';
import '../../css/y/ynf6vdqes.css';
import '../../css/y/yetpatbcg.css';
import '../../css/g/gdf4t4dvu.css';
import '../../css/v/vw0i4gzhz.css';
import '../../css/t/t6qb86bhm.css';
import '../../css/t/t_wjun5gx.css';
import '../../css/g/gmwf64byv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b4mg8acou wm-shadow"/><path class="mf09cfm0a"/><path class="ynf6vdqes"/><path class="yetpatbcg"/><path class="gdf4t4dvu"/><path class="vw0i4gzhz"/><path class="t6qb86bhm"/><path class="t_wjun5gx wm-shine"/><path class="gmwf64byv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:paint-roller"} {...others} />);
}

export default Component;
