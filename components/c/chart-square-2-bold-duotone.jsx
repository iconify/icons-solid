import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/z/z8-uod0ms.css';
import '../../css/l/l_rtxu4wa.css';
import '../../css/j/jf3evj6wi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="z8-uod0ms"/><path class="l_rtxu4wa"/><path class="jf3evj6wi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-square-2-bold-duotone"} {...others} />);
}

export default Component;
