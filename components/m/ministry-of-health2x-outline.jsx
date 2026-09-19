import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5k9pab6h.css';
import '../../css/b/b5q8sk36z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="m5k9pab6h"/><path clip-rule="evenodd" class="b5q8sk36z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ministry-of-health2x-outline"} {...others} />);
}

export default Component;
