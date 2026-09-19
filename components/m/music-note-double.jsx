import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwmtrpb8b.css';
import '../../css/f/fix04rbfz.css';
import '../../css/c/c757m7bdq.css';
import '../../css/u/u1ulbtb_i.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pwmtrpb8b"/><ellipse class="fix04rbfz"/><ellipse class="c757m7bdq"/><path clip-rule="evenodd" class="u1ulbtb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:music-note-double"} {...others} />);
}

export default Component;
