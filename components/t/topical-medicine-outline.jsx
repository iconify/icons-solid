import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/elxxvlb9h.css';
import '../../css/b/bgh1dyb_s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="elxxvlb9h"/><path clip-rule="evenodd" class="bgh1dyb_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:topical-medicine-outline"} {...others} />);
}

export default Component;
