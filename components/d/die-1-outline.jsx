import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w5l36fhuc.css';
import '../../css/k/k8ta0qmcg.css';
import '../../css/p/pg1uithbf.css';
import '../../css/s/sxclq_x3o.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w5l36fhuc"/><path class="k8ta0qmcg"/><path class="pg1uithbf"/><path class="sxclq_x3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:die-1-outline"} {...others} />);
}

export default Component;
