import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xkz5p6blt.css';
import '../../css/f/f3gj-6bzn.css';
import '../../css/k/k8rsyn0ez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xkz5p6blt"/><path class="f3gj-6bzn"/><path class="k8rsyn0ez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-tree-bold-duotone"} {...others} />);
}

export default Component;
