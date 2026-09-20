import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfazbmtdp.css';
import '../../css/v/vfdd5acqu.css';
import '../../css/l/lgh-w7p6j.css';
import '../../css/z/zz211-tds.css';
import '../../css/h/hz12_acli.css';
import '../../css/k/kbtag9bhz.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/f/f9mli5bei.css';
import '../../css/f/f29c6j_zv.css';
import '../../css/n/nc4i4zpyd.css';
import '../../css/f/futvalb4t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jfazbmtdp"/><path class="vfdd5acqu"/><path class="lgh-w7p6j"/><path class="zz211-tds"/><circle class="hz12_acli"/><path class="kbtag9bhz"/><g class="rpvb-o6bq"><path class="f9mli5bei"/><path class="f29c6j_zv"/><path class="nc4i4zpyd"/><path class="futvalb4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:evacuate-fire"} {...others} />);
}

export default Component;
