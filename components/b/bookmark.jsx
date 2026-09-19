import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wlznzl_gi.css';
import '../../css/r/r_2iz0sxd.css';
import '../../css/u/uoq_q1lqx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wlznzl_gi"/><path clip-rule="evenodd" class="r_2iz0sxd"/><path class="uoq_q1lqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bookmark"} {...others} />);
}

export default Component;
