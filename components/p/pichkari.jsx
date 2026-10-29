import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k734pwbkv.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ifzoy8brk.css';
import '../../css/z/zwuu6qh8c.css';
import '../../css/f/f_w94fpzk.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kt5vj-rhb.css';
import '../../css/h/h1byvhb1q.css';
import '../../css/f/f2pucsbom.css';
import '../../css/g/gm9_bac7e.css';
import '../../css/p/p8dq1zbwq.css';
import '../../css/x/xxfv1wubk.css';
import '../../css/p/psnycdeeg.css';
import '../../css/e/efjf-hl-r.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGdROCOaKR" class="k734pwbkv"/></defs><g class="t_2lkqbxb"><path class="ifzoy8brk wm-shadow"/><path class="zwuu6qh8c"/><path class="f_w94fpzk"/><use href="#SVGdROCOaKR" class="d2kvgvbvc"/><path class="kt5vj-rhb"/><use href="#SVGdROCOaKR" class="d2kvgvbvc"/><path class="h1byvhb1q"/><path class="f2pucsbom"/><path class="gm9_bac7e wm-shine"/><path class="p8dq1zbwq wm-s"/><path class="wm-s xxfv1wubk"/><path class="psnycdeeg wm-s"/><path class="efjf-hl-r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pichkari"} {...others} />);
}

export default Component;
