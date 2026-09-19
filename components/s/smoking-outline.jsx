import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lo-104boj.css';
import '../../css/a/amdf2k30j.css';
import '../../css/q/qt50d49vp.css';
import '../../css/p/p6fs5dave.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="lo-104boj"/><path class="amdf2k30j"/><path clip-rule="evenodd" class="qt50d49vp"/><path class="p6fs5dave"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:smoking-outline"} {...others} />);
}

export default Component;
