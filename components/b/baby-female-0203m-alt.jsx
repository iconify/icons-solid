import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgsol42ey.css';
import '../../css/q/qlou0-b5s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="sgsol42ey"/><path clip-rule="evenodd" class="qlou0-b5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-female-0203m-alt"} {...others} />);
}

export default Component;
