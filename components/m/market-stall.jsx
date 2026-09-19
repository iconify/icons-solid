import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qyltccclc.css';
import '../../css/v/v7de4ob9p.css';
import '../../css/f/fpt5t9bqn.css';
import '../../css/e/e-q_ws7_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qyltccclc"/><path clip-rule="evenodd" class="v7de4ob9p"/><path class="fpt5t9bqn"/><path class="e-q_ws7_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:market-stall"} {...others} />);
}

export default Component;
