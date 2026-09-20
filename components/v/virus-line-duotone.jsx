import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d9igfubdy.css';
import '../../css/c/c55eu_hcw.css';
import '../../css/q/qx7--ltrd.css';
import '../../css/l/lta1ae56a.css';
import '../../css/w/w7ciym5sw.css';
import '../../css/v/v2_ccbvux.css';
import '../../css/m/mahp6rvxf.css';
import '../../css/f/fsbgzxbis.css';
import '../../css/g/goxl-kh1x.css';
import '../../css/v/vocz7cfnh.css';
import '../../css/i/iblu4ablw.css';
import '../../css/c/c9p7oqbzs.css';
import '../../css/d/dme299bjn.css';
import '../../css/e/eq15k-4rg.css';
import '../../css/f/fwj9hs28x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d9igfubdy"/><path class="c55eu_hcw"/><path class="qx7--ltrd"/><path class="lta1ae56a"/><path class="w7ciym5sw"/><path class="v2_ccbvux"/><path class="mahp6rvxf"/><circle class="fsbgzxbis"/><circle transform="matrix(-1 0 0 1 5 2)" class="goxl-kh1x"/><path class="vocz7cfnh"/><circle transform="matrix(1 0 0 -1 17.05 21.05)" class="goxl-kh1x"/><circle transform="rotate(180 4.5 20.5)" class="iblu4ablw"/><path class="c9p7oqbzs"/><path class="dme299bjn"/><path class="eq15k-4rg"/><path class="fwj9hs28x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:virus-line-duotone"} {...others} />);
}

export default Component;
