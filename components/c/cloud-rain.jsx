import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjzv80bvs.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hcjbeqbvu.css';
import '../../css/a/aw3n4bbvy.css';
import '../../css/f/fspw2kbzv.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fb-4m_c0s.css';
import '../../css/l/lp5h_d8gj.css';
import '../../css/a/az9il_b7f.css';
import '../../css/w/wdphd8b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGjwsoZbSB" class="rjzv80bvs"/></defs><g class="t_2lkqbxb"><path class="hcjbeqbvu wm-shadow"/><path class="aw3n4bbvy"/><path class="fspw2kbzv"/><use href="#SVGjwsoZbSB" class="d2kvgvbvc"/><path class="fb-4m_c0s"/><use href="#SVGjwsoZbSB" class="d2kvgvbvc"/><path class="lp5h_d8gj"/><path class="az9il_b7f wm-shine"/><path class="wdphd8b3t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cloud-rain"} {...others} />);
}

export default Component;
