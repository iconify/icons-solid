import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nw4_41b1c.css';
import '../../css/k/kh_sh14vd.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="nw4_41b1c"/><path class="kh_sh14vd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:star-slash-duotone"} {...others} />);
}

export default Component;
