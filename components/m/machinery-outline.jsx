import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a246yekfz.css';
import '../../css/z/z15dfjbgt.css';
import '../../css/d/d6xyxyb_o.css';
import '../../css/m/m67u5dz9l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a246yekfz"/><path clip-rule="evenodd" class="z15dfjbgt"/><path class="d6xyxyb_o"/><path clip-rule="evenodd" class="m67u5dz9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:machinery-outline"} {...others} />);
}

export default Component;
