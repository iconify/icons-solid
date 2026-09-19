import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nldomubfm.css';
import '../../css/k/kkesx9btg.css';
import '../../css/b/bwz--2-hu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nldomubfm"/><path clip-rule="evenodd" class="kkesx9btg"/><path class="bwz--2-hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rmnh"} {...others} />);
}

export default Component;
