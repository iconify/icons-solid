import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np2e86c6q.css';
import '../../css/l/lbaw04box.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="np2e86c6q"/><path class="lbaw04box"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-right-to-line-bulk-round"} {...others} />);
}

export default Component;
