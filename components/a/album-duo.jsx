import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phn313jkl.css';
import '../../css/x/x3-70tbts.css';
import '../../css/u/u_98p6ftd.css';
import '../../css/t/tyfm-kbgt.css';
import '../../css/h/hhgw1kb0y.css';
import '../../css/k/kvxz3fbir.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="phn313jkl"/><path class="x3-70tbts"/><path class="u_98p6ftd"/><path class="tyfm-kbgt"/><path class="hhgw1kb0y"/><path class="kvxz3fbir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:album-duo"} {...others} />);
}

export default Component;
