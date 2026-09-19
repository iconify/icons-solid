import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smuptmriv.css';
import '../../css/o/ozg1gctei.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="smuptmriv"/><path clip-rule="evenodd" class="ozg1gctei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-secure-outline"} {...others} />);
}

export default Component;
