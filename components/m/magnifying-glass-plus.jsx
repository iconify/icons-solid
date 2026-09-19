import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-tbpjy4o.css';
import '../../css/l/llreu3clb.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="b-tbpjy4o"/><path clip-rule="evenodd" class="llreu3clb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:magnifying-glass-plus"} {...others} />);
}

export default Component;
