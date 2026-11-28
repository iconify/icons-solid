import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftuj6ccub.css';
import '../../css/e/enp8vng_y.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="ftuj6ccub"/><path class="enp8vng_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:rock-tall-duotone"} {...others} />);
}

export default Component;
