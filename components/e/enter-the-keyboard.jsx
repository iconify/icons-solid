import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/o7c2cxbly.css';
import '../../css/w/w-46dcbay.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="o7c2cxbly"/><path class="w-46dcbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:enter-the-keyboard"} {...others} />);
}

export default Component;
