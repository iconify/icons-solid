import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj1a4k1vn.css';
import '../../css/v/vb954ab7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="bj1a4k1vn"/><path clip-rule="evenodd" class="vb954ab7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medium-bars"} {...others} />);
}

export default Component;
