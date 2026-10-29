import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfnnmkzge.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vrb1nql0m.css';
import '../../css/y/y187_px5y.css';
import '../../css/i/iyp_9abib.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/an-mnbcxc.css';
import '../../css/f/fl0x_6fog.css';
import '../../css/h/h79_ep_dw.css';
import '../../css/t/ttlgxgs4l.css';
import '../../css/j/jn01vtjva.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGkSIYyb9d" class="lfnnmkzge"/></defs><g class="t_2lkqbxb"><path class="vrb1nql0m wm-shadow"/><path class="y187_px5y"/><path class="iyp_9abib"/><use href="#SVGkSIYyb9d" class="d2kvgvbvc"/><path class="an-mnbcxc"/><use href="#SVGkSIYyb9d" class="d2kvgvbvc"/><path class="fl0x_6fog"/><path class="h79_ep_dw"/><path class="ttlgxgs4l wm-shine"/><path class="jn01vtjva wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:red-lantern"} {...others} />);
}

export default Component;
