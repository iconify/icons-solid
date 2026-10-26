import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m02nh0bjz.css';
import '../../css/q/qlw-z4bkp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="m02nh0bjz"/><path class="qlw-z4bkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cpap-masks"} {...others} />);
}

export default Component;
