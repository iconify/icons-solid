import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5964rbcx.css';
import '../../css/o/o0810kmwd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="j5964rbcx"/><path clip-rule="evenodd" class="o0810kmwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-goggles"} {...others} />);
}

export default Component;
