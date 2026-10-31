import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upuvm4uhm.css';
import '../../css/j/jo979gbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="upuvm4uhm"/><path class="jo979gbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:link-break-bulk-round"} {...others} />);
}

export default Component;
