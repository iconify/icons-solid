import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnzw34bwh.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/horpzwb8a.css';
import '../../css/l/lxagwbcak.css';
import '../../css/w/wh2fwub4e.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bv6nu8b0u.css';
import '../../css/i/ik4fgnm2j.css';
import '../../css/y/y5yzd1bwd.css';
import '../../css/q/qdxzlmb_t.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGCyDtycGa" class="qnzw34bwh"/></defs><g class="t_2lkqbxb"><path class="horpzwb8a wm-shadow"/><path class="lxagwbcak"/><path class="wh2fwub4e"/><use href="#SVGCyDtycGa" class="d2kvgvbvc"/><path class="bv6nu8b0u"/><use href="#SVGCyDtycGa" class="d2kvgvbvc"/><path class="ik4fgnm2j"/><path class="y5yzd1bwd"/><path class="qdxzlmb_t wm-shine"/><path class="aexe23bqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:train"} {...others} />);
}

export default Component;
