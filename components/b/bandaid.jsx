import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_a3s2bgb.css';
import '../../css/b/bkocpyb2s.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="q_a3s2bgb"/><path class="bkocpyb2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bandaid"} {...others} />);
}

export default Component;
