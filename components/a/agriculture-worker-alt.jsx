import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-tavvist.css';
import '../../css/q/qy742pb6d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="o-tavvist"/><path clip-rule="evenodd" class="qy742pb6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:agriculture-worker-alt"} {...others} />);
}

export default Component;
