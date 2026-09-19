import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epq058iwy.css';
import '../../css/o/ouvzgodlz.css';
import '../../css/k/ks0_yrbsb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="epq058iwy"/><path clip-rule="evenodd" class="ouvzgodlz"/><path class="ks0_yrbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dental-hygiene-outline"} {...others} />);
}

export default Component;
