import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m89qgbkka.css';
import '../../css/l/ly04pl8_v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="m89qgbkka"/><path clip-rule="evenodd" class="ly04pl8_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-infected-decreasing2x-outline"} {...others} />);
}

export default Component;
