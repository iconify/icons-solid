import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbpd_qjos.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/egy-68l8p.css';
import '../../css/s/sry6t28wy.css';
import '../../css/h/hyl6d_5aj.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/axpvkubwh.css';
import '../../css/x/xtpz1qbce.css';
import '../../css/q/qeigenbhi.css';
import '../../css/n/n7qn_-lhr.css';
import '../../css/r/re-7g4b9l.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG1VCvKb0M" class="hbpd_qjos"/></defs><g class="t_2lkqbxb"><path class="egy-68l8p wm-shadow"/><path class="sry6t28wy"/><path class="hyl6d_5aj"/><use href="#SVG1VCvKb0M" class="d2kvgvbvc"/><path class="axpvkubwh"/><use href="#SVG1VCvKb0M" class="d2kvgvbvc"/><path class="xtpz1qbce"/><path class="qeigenbhi"/><path class="n7qn_-lhr wm-shine"/><path class="re-7g4b9l wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bed"} {...others} />);
}

export default Component;
