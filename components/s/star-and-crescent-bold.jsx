import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/irjh9jilq.css';
import '../../css/g/ggd2cgbpw.css';
import '../../css/y/yyrmujbrk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="irjh9jilq"/><path class="ggd2cgbpw"/><path class="yyrmujbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-and-crescent-bold"} {...others} />);
}

export default Component;
