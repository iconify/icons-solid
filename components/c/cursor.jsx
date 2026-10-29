import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9un-vldz.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hd3_1rjbv.css';
import '../../css/l/ltis0ub5a.css';
import '../../css/b/bakowsxjg.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jiq2ahg1p.css';
import '../../css/t/td69p5bjt.css';
import '../../css/k/kixm3lh-h.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGqOTnhcUG" class="j9un-vldz"/></defs><g class="t_2lkqbxb"><path class="hd3_1rjbv wm-shadow"/><path class="ltis0ub5a"/><path class="bakowsxjg"/><use href="#SVGqOTnhcUG" class="d2kvgvbvc"/><path class="jiq2ahg1p"/><use href="#SVGqOTnhcUG" class="d2kvgvbvc"/><path class="td69p5bjt"/><path class="kixm3lh-h wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cursor"} {...others} />);
}

export default Component;
