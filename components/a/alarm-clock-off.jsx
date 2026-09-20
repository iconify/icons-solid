import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/isfkj5b_q.css';
import '../../css/y/yj0-viwyb.css';
import '../../css/o/oifdkrbmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="isfkj5b_q"/><path class="yj0-viwyb"/><path class="oifdkrbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:alarm-clock-off"} {...others} />);
}

export default Component;
