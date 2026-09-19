import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_62b9bmb.css';
import '../../css/d/dmig-gjdk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="w_62b9bmb"/><path clip-rule="evenodd" class="dmig-gjdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:stop"} {...others} />);
}

export default Component;
