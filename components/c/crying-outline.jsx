import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6x5n2gml.css';
import '../../css/w/wp-xmi3gk.css';
import '../../css/p/pp778nb5w.css';
import '../../css/l/li2gxfaww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="t6x5n2gml"/><path class="wp-xmi3gk"/><path clip-rule="evenodd" class="pp778nb5w"/><path class="li2gxfaww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:crying-outline"} {...others} />);
}

export default Component;
