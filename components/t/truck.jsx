import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npzpgxnxe.css';
import '../../css/w/wtbz1yfme.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="npzpgxnxe"/><path class="wtbz1yfme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:truck"} {...others} />);
}

export default Component;
