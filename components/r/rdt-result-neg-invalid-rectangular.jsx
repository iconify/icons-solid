import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yk6vug9es.css';
import '../../css/s/s0k87vbsb.css';
import '../../css/f/fb092736l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="yk6vug9es"/><path clip-rule="evenodd" class="s0k87vbsb"/><path class="fb092736l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-neg-invalid-rectangular"} {...others} />);
}

export default Component;
