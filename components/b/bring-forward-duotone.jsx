import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqhkotb4u.css';
import '../../css/m/mg9m7rbyr.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="lqhkotb4u"/><path class="mg9m7rbyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bring-forward-duotone"} {...others} />);
}

export default Component;
