import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4zp7bcdh.css';
import '../../css/r/r81hjcv_h.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="y4zp7bcdh"/><path clip-rule="evenodd" class="r81hjcv_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:magnifying-glass-plus-20-solid"} {...others} />);
}

export default Component;
