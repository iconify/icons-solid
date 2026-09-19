import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/di9dlabcj.css';
import '../../css/m/mt8uieh0u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="di9dlabcj"/><path clip-rule="evenodd" class="mt8uieh0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:virus-research2x-outline"} {...others} />);
}

export default Component;
