import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6g9lcbgc.css';
import '../../css/p/p3qnk6m6n.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="b6g9lcbgc"/><path class="p3qnk6m6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:sidebar-simple-close-duotone"} {...others} />);
}

export default Component;
