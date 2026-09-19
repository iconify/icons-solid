import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifw-3tbef.css';
import '../../css/k/kcbnqacwn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ifw-3tbef"/><path clip-rule="evenodd" class="kcbnqacwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contraceptive-diaphragm2x-outline"} {...others} />);
}

export default Component;
