import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bxp-4qb3o.css';
import '../../css/e/eycan2bvo.css';
import '../../css/o/ox2v0n22b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bxp-4qb3o"/><path class="eycan2bvo wm-a"/><path class="ox2v0n22b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ring-box"} {...others} />);
}

export default Component;
