import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cubpvbc-b.css';
import '../../css/k/kn_yew6ja.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="cubpvbc-b"/><path clip-rule="evenodd" class="kn_yew6ja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:magnifying-glass-minus-20-solid"} {...others} />);
}

export default Component;
