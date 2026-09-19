import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ye2de0rpg.css';
import '../../css/t/t3p6ajbsy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ye2de0rpg"/><path class="t3p6ajbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:usb"} {...others} />);
}

export default Component;
