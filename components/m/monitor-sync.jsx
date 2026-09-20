import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nx7uo1b6f.css';
import '../../css/e/erhwy2l2x.css';
import '../../css/l/liansi-lr.css';
import '../../css/o/oh84kn_pl.css';
import '../../css/u/u2196gb-l.css';
import '../../css/r/rjtcl1b8d.css';
import '../../css/o/oqre15e0c.css';
import '../../css/p/pgxcf0p2i.css';
import '../../css/r/r102ecb2n.css';
import '../../css/e/exj2zsfvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nx7uo1b6f"/><path class="erhwy2l2x"/><path class="liansi-lr"/><path class="oh84kn_pl"/><path class="u2196gb-l"/><path class="rjtcl1b8d"/><path class="oqre15e0c"/><path class="pgxcf0p2i"/><path class="r102ecb2n"/><path class="exj2zsfvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor-sync"} {...others} />);
}

export default Component;
