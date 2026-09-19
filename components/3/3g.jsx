import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hij1pb51c.css';
import '../../css/u/ub_arxa5v.css';
import '../../css/k/k__3w58ri.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hij1pb51c"/><path class="ub_arxa5v"/><path clip-rule="evenodd" class="k__3w58ri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:3g"} {...others} />);
}

export default Component;
