import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pz515pmtt.css';
import '../../css/r/rvpeyybdv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="pz515pmtt"/><path clip-rule="evenodd" class="rvpeyybdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:autoimmune-disease"} {...others} />);
}

export default Component;
