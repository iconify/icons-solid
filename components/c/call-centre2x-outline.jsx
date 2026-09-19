import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x75_jfg6x.css';
import '../../css/v/vralhqbll.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="x75_jfg6x"/><path clip-rule="evenodd" class="vralhqbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:call-centre2x-outline"} {...others} />);
}

export default Component;
