import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn7_i2bdc.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cty1fcy7t.css';
import '../../css/k/kc65izb3o.css';
import '../../css/n/n-0xjwnxl.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zxg0subut.css';
import '../../css/p/po2fuvb6u.css';
import '../../css/o/oyfmgub0f.css';
import '../../css/t/trs43xbcv.css';
import '../../css/t/tska3sj2f.css';
import '../../css/v/vonb3q4ol.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGVg6JIefD" class="hn7_i2bdc"/></defs><g class="t_2lkqbxb"><path class="cty1fcy7t wm-shadow"/><path class="kc65izb3o"/><path class="n-0xjwnxl"/><use href="#SVGVg6JIefD" class="d2kvgvbvc"/><path class="zxg0subut"/><use href="#SVGVg6JIefD" class="d2kvgvbvc"/><path class="po2fuvb6u"/><path class="oyfmgub0f"/><path class="trs43xbcv"/><path class="tska3sj2f wm-shine"/><path class="vonb3q4ol wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:heart-balloon"} {...others} />);
}

export default Component;
