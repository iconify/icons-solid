import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mn8hdvbac.css';
import '../../css/g/gw4m_pbgb.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="mn8hdvbac"/><path clip-rule="evenodd" class="gw4m_pbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:server-stack"} {...others} />);
}

export default Component;
