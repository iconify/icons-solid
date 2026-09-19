import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wopn0fkef.css';
import '../../css/n/nvvganbqr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="wopn0fkef"/><path clip-rule="evenodd" class="nvvganbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:male-sex-worker"} {...others} />);
}

export default Component;
