import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mo071dbej.css';
import '../../css/a/apap_ab6a.css';
import '../../css/w/w3a_f7b_k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="mo071dbej"/><path class="apap_ab6a"/><path class="w3a_f7b_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:reload"} {...others} />);
}

export default Component;
