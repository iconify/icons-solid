import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdtnwqcof.css';
import '../../css/b/bd_l30gnb.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="gdtnwqcof"/><path class="bd_l30gnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bring-to-front-duotone"} {...others} />);
}

export default Component;
