import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emwx-3k0l.css';
import '../../css/w/wqx342l3h.css';
import '../../css/j/j1pmrcoqo.css';
import '../../css/r/r1x6x451g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="emwx-3k0l"/><path class="wqx342l3h"/><path class="j1pmrcoqo"/><path class="r1x6x451g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-tree-duotone"} {...others} />);
}

export default Component;
