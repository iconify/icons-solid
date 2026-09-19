import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-ungcbcn.css';
import '../../css/n/nw5oqcbgf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="n-ungcbcn"/><path class="nw5oqcbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-raised-hand"} {...others} />);
}

export default Component;
