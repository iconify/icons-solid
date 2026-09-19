import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9xpk6bcd.css';
import '../../css/m/mz3zmux_e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="x9xpk6bcd"/><path clip-rule="evenodd" class="mz3zmux_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:wheelchair"} {...others} />);
}

export default Component;
