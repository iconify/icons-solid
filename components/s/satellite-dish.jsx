import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to6hsovnr.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y0xbyebgv.css';
import '../../css/b/bjox4mbfj.css';
import '../../css/r/rzopd_j3s.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i_wl8-bmu.css';
import '../../css/d/dcby08g7m.css';
import '../../css/q/qdl5twb_k.css';
import '../../css/d/dxn46sbtc.css';
import '../../css/t/tf99soacq.css';
import '../../css/v/vonb3q4ol.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGFfBjExGD" class="to6hsovnr"/></defs><g class="t_2lkqbxb"><path class="wm-shadow y0xbyebgv"/><path class="bjox4mbfj"/><path class="rzopd_j3s"/><use href="#SVGFfBjExGD" class="d2kvgvbvc"/><path class="i_wl8-bmu"/><use href="#SVGFfBjExGD" class="d2kvgvbvc"/><path class="dcby08g7m"/><path class="qdl5twb_k wm-s"/><path class="dxn46sbtc wm-s"/><path class="tf99soacq wm-s"/><path class="vonb3q4ol wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:satellite-dish"} {...others} />);
}

export default Component;
