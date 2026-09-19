import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_evy9pfn.css';
import '../../css/e/e0sqh9n-g.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="d_evy9pfn"/><path clip-rule="evenodd" class="e0sqh9n-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bell-alert-20-solid"} {...others} />);
}

export default Component;
