import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-tezjb2p.css';
import '../../css/d/d88hpjocj.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="j-tezjb2p"/><path class="d88hpjocj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:x-circle-multiple-duotone"} {...others} />);
}

export default Component;
