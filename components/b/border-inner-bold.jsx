import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/or-xk9b_u.css';
import '../../css/t/tei45nfmy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="or-xk9b_u"/><path class="tei45nfmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-inner-bold"} {...others} />);
}

export default Component;
