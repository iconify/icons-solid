import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/anma4zbmz.css';
import '../../css/a/ajiukk8qu.css';
import '../../css/y/y_8f2ac4v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="anma4zbmz"/><path class="ajiukk8qu"/><path class="y_8f2ac4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:braces"} {...others} />);
}

export default Component;
