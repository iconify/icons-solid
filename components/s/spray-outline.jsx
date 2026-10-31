import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9rkou0mf.css';
import '../../css/m/m_ogqzi-d.css';
import '../../css/v/vjc3f2jdt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s9rkou0mf"/><path class="m_ogqzi-d"/><path clip-rule="evenodd" class="vjc3f2jdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:spray-outline"} {...others} />);
}

export default Component;
