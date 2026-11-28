import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqjr78hjn.css';
import '../../css/d/dch-8rb2n.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="rqjr78hjn"/><path class="dch-8rb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:tags-duotone"} {...others} />);
}

export default Component;
