import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0_n_ffrq.css';
import '../../css/e/e6db-abvh.css';
import '../../css/g/goz3ixbdu.css';
import '../../css/c/cf8_f7bal.css';
import '../../css/d/d99lv5ocs.css';
import '../../css/r/r3q_9oi-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b0_n_ffrq"/><path class="e6db-abvh"/><path class="goz3ixbdu"/><path class="cf8_f7bal"/><path class="d99lv5ocs"/><path clip-rule="evenodd" class="r3q_9oi-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-square-bold"} {...others} />);
}

export default Component;
