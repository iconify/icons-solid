import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t-k3l8erb.css';
import '../../css/l/lz53-qbjq.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="t-k3l8erb"/><path class="lz53-qbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:whistle-duotone"} {...others} />);
}

export default Component;
