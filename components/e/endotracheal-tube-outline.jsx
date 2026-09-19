import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wy1qmwb1c.css';
import '../../css/p/pfww3mgru.css';
import '../../css/d/d9kll0v9v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wy1qmwb1c"/><path clip-rule="evenodd" class="pfww3mgru"/><path class="d9kll0v9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:endotracheal-tube-outline"} {...others} />);
}

export default Component;
