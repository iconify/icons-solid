import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nwn8o7blq.css';
import '../../css/g/gu539fbpy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="nwn8o7blq"/><path clip-rule="evenodd" class="gu539fbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:running-water"} {...others} />);
}

export default Component;
