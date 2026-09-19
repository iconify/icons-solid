import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/es5a3xr1s.css';
import '../../css/b/bb4vrvbzl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="es5a3xr1s"/><path clip-rule="evenodd" class="bb4vrvbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:burn-outline"} {...others} />);
}

export default Component;
