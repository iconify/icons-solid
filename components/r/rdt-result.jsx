import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqsq9onaa.css';
import '../../css/u/up8rx9bjm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="lqsq9onaa"/><path clip-rule="evenodd" class="up8rx9bjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result"} {...others} />);
}

export default Component;
