import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f13-t_k2z.css';
import '../../css/m/mrlfgcc7o.css';
import '../../css/h/hh0wagbud.css';
import '../../css/g/g9a9qdbre.css';
import '../../css/c/chcnzw_nt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="f13-t_k2z"/><path clip-rule="evenodd" class="mrlfgcc7o"/><path class="hh0wagbud"/><path class="g9a9qdbre"/><path class="chcnzw_nt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:king-bold"} {...others} />);
}

export default Component;
