import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruevm4bfr.css';
import '../../css/z/zsprg9jlr.css';
import '../../css/b/bv2_dltfd.css';
import '../../css/e/e_aghdcvj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/ue-hl85dx.css';
import '../../css/r/rxwe5oy7h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ruevm4bfr"/><path class="zsprg9jlr"/><path class="bv2_dltfd"/><path class="e_aghdcvj"/><g class="jn8qy4bru"><path class="ue-hl85dx"/><path class="rxwe5oy7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fire-extinguisher"} {...others} />);
}

export default Component;
