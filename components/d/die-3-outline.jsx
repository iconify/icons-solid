import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mbt7znpoq.css';
import '../../css/k/k8ta0qmcg.css';
import '../../css/w/wz-2tiais.css';
import '../../css/s/sxclq_x3o.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mbt7znpoq"/><path class="k8ta0qmcg"/><path class="wz-2tiais"/><path class="sxclq_x3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:die-3-outline"} {...others} />);
}

export default Component;
