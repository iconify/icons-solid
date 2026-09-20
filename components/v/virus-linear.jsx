import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d9igfubdy.css';
import '../../css/q/qftlv8bpb.css';
import '../../css/v/vucbnbbhu.css';
import '../../css/l/lta1ae56a.css';
import '../../css/z/zb_o4p5fn.css';
import '../../css/v/v2_ccbvux.css';
import '../../css/z/zydd4fbxz.css';
import '../../css/f/fsbgzxbis.css';
import '../../css/g/goxl-kh1x.css';
import '../../css/k/kvnjkvb7x.css';
import '../../css/i/iblu4ablw.css';
import '../../css/z/zca6p_bfo.css';
import '../../css/b/bdtptebcp.css';
import '../../css/c/c7s7ctprl.css';
import '../../css/e/ei6v1xbcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d9igfubdy"/><path class="qftlv8bpb"/><path class="vucbnbbhu"/><path class="lta1ae56a"/><path class="zb_o4p5fn"/><path class="v2_ccbvux"/><path class="zydd4fbxz"/><circle class="fsbgzxbis"/><circle transform="matrix(-1 0 0 1 5 2)" class="goxl-kh1x"/><path class="kvnjkvb7x"/><circle transform="matrix(1 0 0 -1 17.05 21.05)" class="goxl-kh1x"/><circle transform="rotate(180 4.5 20.5)" class="iblu4ablw"/><path class="zca6p_bfo"/><path class="bdtptebcp"/><path class="c7s7ctprl"/><path class="ei6v1xbcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:virus-linear"} {...others} />);
}

export default Component;
