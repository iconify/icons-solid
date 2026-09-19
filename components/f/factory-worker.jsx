import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzib17bsz.css';
import '../../css/t/tq0xuccly.css';
import '../../css/i/i6e9c_m2f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="jzib17bsz"/><path clip-rule="evenodd" class="tq0xuccly"/><path class="i6e9c_m2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:factory-worker"} {...others} />);
}

export default Component;
