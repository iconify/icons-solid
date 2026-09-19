import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yhudq1ycc.css';
import '../../css/m/m-walhbwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="yhudq1ycc"/><path clip-rule="evenodd" class="m-walhbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-infected-stable2x-outline"} {...others} />);
}

export default Component;
