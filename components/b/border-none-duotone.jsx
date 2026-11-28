import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bi20ndt2y.css';
import '../../css/m/musq95nnq.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="bi20ndt2y"/><path class="musq95nnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:border-none-duotone"} {...others} />);
}

export default Component;
