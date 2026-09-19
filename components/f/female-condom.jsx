import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cajm6-_qh.css';
import '../../css/b/bqkgiyjlb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="cajm6-_qh"/><path clip-rule="evenodd" class="bqkgiyjlb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:female-condom"} {...others} />);
}

export default Component;
