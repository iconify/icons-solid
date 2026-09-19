import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jayab4bkc.css';
import '../../css/l/looxvfs3b.css';
import '../../css/l/loy_czb3p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="jayab4bkc"/><path class="looxvfs3b"/><path class="loy_czb3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-half-2-bold"} {...others} />);
}

export default Component;
