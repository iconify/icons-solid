import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxfqulobg.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/otokfqbyc.css';
import '../../css/h/h2tyqf0lx.css';
import '../../css/q/qd7tl_j0k.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nbvyecbth.css';
import '../../css/z/znt29hbqa.css';
import '../../css/o/o38tvugch.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGLMm6xlfp" class="jxfqulobg"/></defs><g class="t_2lkqbxb"><path class="otokfqbyc wm-shadow"/><path class="h2tyqf0lx"/><path class="qd7tl_j0k"/><use href="#SVGLMm6xlfp" class="d2kvgvbvc"/><path class="nbvyecbth"/><use href="#SVGLMm6xlfp" class="d2kvgvbvc"/><path class="znt29hbqa"/><path class="o38tvugch wm-shine"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:zoom-in"} {...others} />);
}

export default Component;
