import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bglu54b4i.css';
import '../../css/c/cf6p08jrp.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="bglu54b4i"/><path class="cf6p08jrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:clock-plus-duotone"} {...others} />);
}

export default Component;
