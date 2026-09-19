import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvsc-bbld.css';
import '../../css/i/iinkstb0q.css';

const viewBox = {"width":39,"height":32};
const content = `<g class="cuyn6tgcc"><path class="rvsc-bbld"/><path class="iinkstb0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:desktop"} {...others} />);
}

export default Component;
