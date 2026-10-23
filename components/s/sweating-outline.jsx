import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yi_7vme2b.css';
import '../../css/w/w3a9vb0vh.css';
import '../../css/g/gvtuoyesg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yi_7vme2b"/><path class="w3a9vb0vh"/><path clip-rule="evenodd" class="gvtuoyesg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sweating-outline"} {...others} />);
}

export default Component;
