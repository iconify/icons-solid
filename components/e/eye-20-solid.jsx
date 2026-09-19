import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hnq0rg8hp.css';
import '../../css/x/x8cplgb-w.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="hnq0rg8hp"/><path clip-rule="evenodd" class="x8cplgb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:eye-20-solid"} {...others} />);
}

export default Component;
