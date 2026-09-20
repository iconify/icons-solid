import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrbve4bqj.css';
import '../../css/t/tti9_b1tl.css';
import '../../css/c/cg0pxqb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jrbve4bqj"/><path class="tti9_b1tl"/><path class="cg0pxqb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-minimalistic-bold"} {...others} />);
}

export default Component;
