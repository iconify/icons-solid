import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fw8nj6bww.css';
import '../../css/e/e6i4xwbcm.css';
import '../../css/m/mwg-70b4o.css';
import '../../css/m/mvo4k_okj.css';
import '../../css/p/pkwn_sbco.css';
import '../../css/e/eej3hfbqc.css';
import '../../css/f/f7-x_q1cy.css';
import '../../css/h/hd7awmb8a.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fw8nj6bww wm-shadow"/><path class="e6i4xwbcm"/><path class="mwg-70b4o"/><path class="mvo4k_okj"/><path class="pkwn_sbco"/><path class="eej3hfbqc"/><path class="f7-x_q1cy"/><path class="hd7awmb8a wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-bear"} {...others} />);
}

export default Component;
