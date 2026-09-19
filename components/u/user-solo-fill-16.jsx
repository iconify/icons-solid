import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btwgzx3zj.css';
import '../../css/v/vy1dqlccp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><circle class="btwgzx3zj"/><path class="vy1dqlccp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-solo-fill-16"} {...others} />);
}

export default Component;
