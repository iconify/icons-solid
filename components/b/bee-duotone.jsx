import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-4bg37ju.css';
import '../../css/o/oi7cl0bfz.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="h-4bg37ju"/><path class="oi7cl0bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bee-duotone"} {...others} />);
}

export default Component;
