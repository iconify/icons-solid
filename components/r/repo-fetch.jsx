import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/trm14bb_w.css';
import '../../css/f/fl3cbbb-h.css';
import '../../css/j/j7oq_bbrs.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="trm14bb_w"/><path clip-rule="evenodd" class="fl3cbbb-h"/><path class="j7oq_bbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:repo-fetch"} {...others} />);
}

export default Component;
