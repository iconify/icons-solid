import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch-u8ybhb.css';
import '../../css/f/fge1qtizn.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="ch-u8ybhb"/><path class="fge1qtizn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:turtle-duotone"} {...others} />);
}

export default Component;
