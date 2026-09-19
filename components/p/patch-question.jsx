import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nybkspifn.css';
import '../../css/n/n1u32wbyg.css';
import '../../css/b/b6v88-svo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="nybkspifn"/><path class="n1u32wbyg"/><path class="b6v88-svo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:patch-question"} {...others} />);
}

export default Component;
