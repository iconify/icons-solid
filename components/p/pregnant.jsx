import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0-pqzbil.css';
import '../../css/n/n23dwtjfw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="u0-pqzbil"/><path clip-rule="evenodd" class="n23dwtjfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pregnant"} {...others} />);
}

export default Component;
