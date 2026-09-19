import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0by8ubkx.css';
import '../../css/v/vunxglx4u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="o0by8ubkx"/><path clip-rule="evenodd" class="vunxglx4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vegetables2x-outline"} {...others} />);
}

export default Component;
