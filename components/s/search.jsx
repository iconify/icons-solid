import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fojpsvbee.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/otokfqbyc.css';
import '../../css/h/h2tyqf0lx.css';
import '../../css/q/qd7tl_j0k.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wz_z6zbju.css';
import '../../css/j/jtdjw0bqc.css';
import '../../css/o/o38tvugch.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGtdxFuFeZ" class="fojpsvbee"/></defs><g class="t_2lkqbxb"><path class="otokfqbyc wm-shadow"/><path class="h2tyqf0lx"/><path class="qd7tl_j0k"/><use href="#SVGtdxFuFeZ" class="d2kvgvbvc"/><path class="wz_z6zbju"/><use href="#SVGtdxFuFeZ" class="d2kvgvbvc"/><path class="jtdjw0bqc"/><path class="o38tvugch wm-shine"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:search"} {...others} />);
}

export default Component;
