import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psve2dmma.css';
import '../../css/c/cw4fcrwag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="psve2dmma"/><path class="cw4fcrwag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:qr-code-bulk-round"} {...others} />);
}

export default Component;
