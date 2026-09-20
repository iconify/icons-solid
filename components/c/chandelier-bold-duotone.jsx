import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjfk6vnme.css';
import '../../css/z/zmfcq7utl.css';
import '../../css/x/xhom9foli.css';
import '../../css/e/e1_axjb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hjfk6vnme"/><path class="zmfcq7utl"/><path class="xhom9foli"/><path class="e1_axjb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chandelier-bold-duotone"} {...others} />);
}

export default Component;
