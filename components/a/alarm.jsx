import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xzqt0v_yd.css';
import '../../css/k/kdx-xsbhx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="xzqt0v_yd"/><path class="kdx-xsbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:alarm"} {...others} />);
}

export default Component;
