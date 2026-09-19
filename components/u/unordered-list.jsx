import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u-8nlvbsi.css';
import '../../css/j/j1dceqbfd.css';
import '../../css/k/kmu8kibgu.css';
import '../../css/o/o_fln8brr.css';
import '../../css/i/i2_djv53g.css';
import '../../css/o/o4w11g70j.css';
import '../../css/x/xyneceaiz.css';
import '../../css/e/etbd42wfr.css';
import '../../css/b/bmgrburgm.css';
import '../../css/j/j_q0nf95z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="u-8nlvbsi"/><path class="j1dceqbfd"/><path class="kmu8kibgu"/><path class="o_fln8brr"/><path class="i2_djv53g"/><path class="o4w11g70j"/><path class="xyneceaiz"/><path class="etbd42wfr"/><path class="bmgrburgm"/><path class="j_q0nf95z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:unordered-list"} {...others} />);
}

export default Component;
