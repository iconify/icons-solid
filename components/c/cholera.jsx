import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drn2ptbym.css';
import '../../css/g/g1s-k3b8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="drn2ptbym"/><path clip-rule="evenodd" class="g1s-k3b8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cholera"} {...others} />);
}

export default Component;
