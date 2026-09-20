import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzu6ipmgy.css';
import '../../css/u/us_lcey2a.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="wzu6ipmgy"/><path class="us_lcey2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:upload"} {...others} />);
}

export default Component;
