import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8yco_sde.css';
import '../../css/y/yr5b3o6qd.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="z8yco_sde"/><path class="yr5b3o6qd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:ethernet-duotone"} {...others} />);
}

export default Component;
