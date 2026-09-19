import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2dqpccdi.css';
import '../../css/i/i-32_ibva.css';
import '../../css/h/hzfv6ac4k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x2dqpccdi"/><path clip-rule="evenodd" class="i-32_ibva"/><path class="hzfv6ac4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contact-support-outline"} {...others} />);
}

export default Component;
