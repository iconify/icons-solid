import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3io1hbci.css';
import '../../css/v/vvgej9bvn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="q3io1hbci"/><path class="vvgej9bvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:line-graph"} {...others} />);
}

export default Component;
