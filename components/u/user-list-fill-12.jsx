import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rhhvmrp6h.css';
import '../../css/j/j61svgbnj.css';
import '../../css/q/qym7_6bvn.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><circle class="rhhvmrp6h"/><path class="j61svgbnj"/></g><path class="qym7_6bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-list-fill-12"} {...others} />);
}

export default Component;
