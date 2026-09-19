import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gv1rnmbhg.css';
import '../../css/l/l2q3qg5ur.css';
import '../../css/j/j5ytutb_b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="gv1rnmbhg"/><path clip-rule="evenodd" class="l2q3qg5ur"/><path clip-rule="evenodd" class="j5ytutb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-atlas-bold"} {...others} />);
}

export default Component;
