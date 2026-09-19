import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdc93g1nz.css';
import '../../css/m/mr5if-bbh.css';
import '../../css/t/ta49hcb6o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="xdc93g1nz"/><path clip-rule="evenodd" class="mr5if-bbh"/><path clip-rule="evenodd" class="ta49hcb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:wheelchair-alt-outline"} {...others} />);
}

export default Component;
