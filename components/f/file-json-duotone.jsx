import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bkm962byn.css';
import '../../css/y/y2w3r9pce.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="bkm962byn"/><path class="y2w3r9pce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:file-json-duotone"} {...others} />);
}

export default Component;
