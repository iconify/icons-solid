import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mntwc-b8k.css';
import '../../css/e/es46yqyih.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="mntwc-b8k"/><path clip-rule="evenodd" class="es46yqyih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chills-fever"} {...others} />);
}

export default Component;
