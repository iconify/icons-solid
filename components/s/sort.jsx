import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y92_fgbke.css';
import '../../css/r/rvc7i_b9t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><circle transform="rotate(-9 18.078 8.286)" class="y92_fgbke"/><path class="rvc7i_b9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:sort"} {...others} />);
}

export default Component;
