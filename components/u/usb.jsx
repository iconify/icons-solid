import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ccf-dmbpo.css';
import '../../css/t/t3p6ajbsy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ccf-dmbpo"/><path class="t3p6ajbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:usb"} {...others} />);
}

export default Component;
