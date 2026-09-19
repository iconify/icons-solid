import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omsq8vbof.css';
import '../../css/x/xpk1k0nqf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="omsq8vbof"/><path clip-rule="evenodd" class="xpk1k0nqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-zoom-in"} {...others} />);
}

export default Component;
