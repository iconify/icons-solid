import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ip3il8c8m.css';
import '../../css/v/v9lae7b8s.css';
import '../../css/c/cx4znobho.css';
import '../../css/v/vajezop0y.css';
import '../../css/z/z0qky_fco.css';
import '../../css/b/b17d1ybgu.css';
import '../../css/e/erq9h2biz.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ip3il8c8m wm-shadow"/><path class="v9lae7b8s"/><path class="cx4znobho"/><path class="vajezop0y"/><path class="wm-shine z0qky_fco"/><path class="b17d1ybgu wm-s"/><path class="erq9h2biz wm-s"/><path class="aexe23bqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:database-zap"} {...others} />);
}

export default Component;
