import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/asw3j7bnj.css';
import '../../css/k/k1u3rdh2l.css';
import '../../css/w/wwnf4bcjk.css';
import '../../css/w/wa93a239p.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="asw3j7bnj"/><path class="k1u3rdh2l"/><path class="wwnf4bcjk"/><path class="wa93a239p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-1-outline"} {...others} />);
}

export default Component;
