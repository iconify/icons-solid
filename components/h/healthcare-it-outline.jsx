import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xf1a6wbgm.css';
import '../../css/m/mgg26ff3u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="xf1a6wbgm"/><path clip-rule="evenodd" class="mgg26ff3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:healthcare-it-outline"} {...others} />);
}

export default Component;
