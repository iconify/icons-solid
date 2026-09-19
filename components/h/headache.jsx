import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcj0oe52h.css';
import '../../css/m/mn2im8yde.css';
import '../../css/m/mcxp28brc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="vcj0oe52h"/><path clip-rule="evenodd" class="mn2im8yde"/><path class="mcxp28brc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:headache"} {...others} />);
}

export default Component;
