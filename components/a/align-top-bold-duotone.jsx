import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/we0hzzv_p.css';
import '../../css/u/u10o49kya.css';
import '../../css/p/pciyzuy3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="we0hzzv_p"/><path class="u10o49kya"/><path clip-rule="evenodd" class="pciyzuy3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-top-bold-duotone"} {...others} />);
}

export default Component;
