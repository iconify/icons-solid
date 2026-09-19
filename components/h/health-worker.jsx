import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht3u44wrh.css';
import '../../css/e/e4hvm7bmm.css';
import '../../css/b/btdoprbad.css';
import '../../css/c/cs9-bv96f.css';
import '../../css/t/t7irjos_n.css';
import '../../css/q/qn-ofu7-g.css';
import '../../css/q/qnnoigbgo.css';
import '../../css/x/xob5xxb3g.css';
import '../../css/e/exo58_bqd.css';
import '../../css/g/g4tscqbsq.css';
import '../../css/c/c0q37_thz.css';
import '../../css/d/d785dnbiz.css';
import '../../css/c/crezz7-es.css';
import '../../css/q/q9xjvyb_q.css';
import '../../css/i/iv8ku13dz.css';
import '../../css/l/lieih9ovg.css';
import '../../css/b/bnbhnlbxw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ht3u44wrh"/><path class="e4hvm7bmm"/><path class="btdoprbad"/><path class="cs9-bv96f"/><path class="t7irjos_n"/><path class="qn-ofu7-g"/><path class="qnnoigbgo"/><path class="xob5xxb3g"/><path class="exo58_bqd"/><path class="g4tscqbsq"/><path class="c0q37_thz"/><path class="d785dnbiz"/><path class="crezz7-es"/><path class="q9xjvyb_q"/><path class="iv8ku13dz"/><path class="lieih9ovg"/><path class="bnbhnlbxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:health-worker"} {...others} />);
}

export default Component;
