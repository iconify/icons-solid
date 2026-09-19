import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r92jf7bnj.css';
import '../../css/l/lq-c69bty.css';
import '../../css/p/p_af5cb9o.css';
import '../../css/g/g378efbht.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r92jf7bnj"/><path class="lq-c69bty"/><path class="p_af5cb9o"/><path class="g378efbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:users-1"} {...others} />);
}

export default Component;
