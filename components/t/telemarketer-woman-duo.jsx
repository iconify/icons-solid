import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u79uerhek.css';
import '../../css/c/cic4ebb1d.css';
import '../../css/b/btkk6qb8b.css';
import '../../css/f/fmbeptb1t.css';
import '../../css/f/f2u-hmber.css';
import '../../css/m/m5ynsx8qv.css';
import '../../css/r/r3-igytxj.css';
import '../../css/t/thbqsgbcl.css';
import '../../css/n/nfzt8rbyt.css';
import '../../css/z/zdbo2meil.css';
import '../../css/t/tbl3wgg2q.css';
import '../../css/h/hykqolbgx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u79uerhek"/><path class="cic4ebb1d"/><path clip-rule="evenodd" class="btkk6qb8b"/><path clip-rule="evenodd" class="fmbeptb1t"/><path class="f2u-hmber"/><path class="m5ynsx8qv"/><path class="r3-igytxj"/><path class="thbqsgbcl"/><path clip-rule="evenodd" class="nfzt8rbyt"/><path class="zdbo2meil"/><path class="tbl3wgg2q"/><path clip-rule="evenodd" class="hykqolbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:telemarketer-woman-duo"} {...others} />);
}

export default Component;
