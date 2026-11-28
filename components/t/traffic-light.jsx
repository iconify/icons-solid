import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y0rv1kwqt.css';
import '../../css/b/bs1k_ybmr.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/j/jg7up-bsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y0rv1kwqt"/><path class="bs1k_ybmr"/><path class="zrlh-6b7n"/><path class="jg7up-bsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:traffic-light"} {...others} />);
}

export default Component;
