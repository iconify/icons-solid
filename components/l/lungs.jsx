import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ntgb1z6op.css';
import '../../css/c/c1j-6_1tm.css';
import '../../css/j/j2dz0wb2h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ntgb1z6op"/><path clip-rule="evenodd" class="c1j-6_1tm"/><path clip-rule="evenodd" class="j2dz0wb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:lungs"} {...others} />);
}

export default Component;
