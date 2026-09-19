import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvuh11b-h.css';
import '../../css/n/nsd4efeon.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="rvuh11b-h"/><path class="nsd4efeon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:forum"} {...others} />);
}

export default Component;
