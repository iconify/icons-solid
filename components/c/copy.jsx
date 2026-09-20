import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw3_qvbyu.css';
import '../../css/j/jfki3ygnf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="sw3_qvbyu"/><path class="jfki3ygnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:copy"} {...others} />);
}

export default Component;
