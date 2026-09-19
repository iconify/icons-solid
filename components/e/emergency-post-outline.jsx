import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxi51qn7s.css';
import '../../css/o/otzej-14v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="lxi51qn7s"/><path clip-rule="evenodd" class="otzej-14v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:emergency-post-outline"} {...others} />);
}

export default Component;
