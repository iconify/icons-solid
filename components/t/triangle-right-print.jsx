import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rs8n2-r_b.css';
import '../../css/e/en8yvtxct.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="rs8n2-r_b"/><path clip-rule="evenodd" class="en8yvtxct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:triangle-right-print"} {...others} />);
}

export default Component;
