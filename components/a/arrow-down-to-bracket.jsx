import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rp3tu2nwo.css';
import '../../css/e/end5akbqu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="rp3tu2nwo"/><path class="end5akbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-down-to-bracket"} {...others} />);
}

export default Component;
