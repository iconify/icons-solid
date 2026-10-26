import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pbv5g6b3m.css';
import '../../css/b/brj4aoubv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="pbv5g6b3m"/><path clip-rule="evenodd" class="brj4aoubv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dialysis-alt"} {...others} />);
}

export default Component;
