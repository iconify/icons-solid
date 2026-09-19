import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pyy5p_8ju.css';
import '../../css/l/lk__3fowg.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="pyy5p_8ju"/><path clip-rule="evenodd" class="lk__3fowg"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:not-ok2x-outline"} {...others} />);
}

export default Component;
