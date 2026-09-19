import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p7md35rfj.css';
import '../../css/t/tm-gy7bea.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="p7md35rfj"/><path clip-rule="evenodd" class="tm-gy7bea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:swim"} {...others} />);
}

export default Component;
