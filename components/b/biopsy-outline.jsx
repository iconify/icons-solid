import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgro9p05h.css';
import '../../css/o/or5oqnxmr.css';
import '../../css/f/ffkv7ob9p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="zgro9p05h"/><path clip-rule="evenodd" class="or5oqnxmr"/><path class="ffkv7ob9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:biopsy-outline"} {...others} />);
}

export default Component;
