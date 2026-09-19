import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-fd9yrls.css';
import '../../css/c/cxat4wbzw.css';
import '../../css/y/y5hl0bc-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x-fd9yrls"/><path clip-rule="evenodd" class="cxat4wbzw"/><path class="y5hl0bc-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-ab-p-outline-24px"} {...others} />);
}

export default Component;
