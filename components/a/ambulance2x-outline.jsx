import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j56joab-t.css';
import '../../css/z/zxz6ve1il.css';
import '../../css/q/q0-dmmbeh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="j56joab-t"/><path clip-rule="evenodd" class="zxz6ve1il"/><path class="q0-dmmbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ambulance2x-outline"} {...others} />);
}

export default Component;
