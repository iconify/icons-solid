import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zqp5lnbil.css';
import '../../css/n/nsxt0ob6z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zqp5lnbil"/><path class="nsxt0ob6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:full-screen-play"} {...others} />);
}

export default Component;
