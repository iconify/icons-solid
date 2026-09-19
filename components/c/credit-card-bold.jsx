import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyeizkbnf.css';
import '../../css/u/u_34de28v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="lyeizkbnf"/><path clip-rule="evenodd" class="u_34de28v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:credit-card-bold"} {...others} />);
}

export default Component;
