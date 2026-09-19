import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1tn6e0wi.css';
import '../../css/o/ozhg_rr4i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="a1tn6e0wi"/><path clip-rule="evenodd" class="ozhg_rr4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:home-outline"} {...others} />);
}

export default Component;
