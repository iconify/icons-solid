import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnh0gv09x.css';
import '../../css/s/s-8e16bxy.css';
import '../../css/p/plg_eihxb.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bnh0gv09x"/><path class="s-8e16bxy"/><path clip-rule="evenodd" class="plg_eihxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:lock-open"} {...others} />);
}

export default Component;
