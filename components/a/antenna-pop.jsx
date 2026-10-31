import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocnwhlbir.css';
import '../../css/r/ryhs8jbbs.css';
import '../../css/o/oa2cp2bee.css';
import '../../css/o/o_ue1-ztq.css';
import '../../css/p/psj_hm_ns.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ocnwhlbir"/><path class="ryhs8jbbs"/><path class="oa2cp2bee"/><path class="o_ue1-ztq"/><path class="psj_hm_ns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:antenna-pop"} {...others} />);
}

export default Component;
