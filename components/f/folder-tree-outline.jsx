import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2onxacdt.css';
import '../../css/e/ez9076b0z.css';
import '../../css/f/fgubyacio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b2onxacdt"/><path class="ez9076b0z"/><path clip-rule="evenodd" class="fgubyacio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-tree-outline"} {...others} />);
}

export default Component;
