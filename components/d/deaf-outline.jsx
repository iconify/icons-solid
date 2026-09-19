import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k4ga_ur6o.css';
import '../../css/s/s340mk47s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="k4ga_ur6o"/><path class="s340mk47s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:deaf-outline"} {...others} />);
}

export default Component;
