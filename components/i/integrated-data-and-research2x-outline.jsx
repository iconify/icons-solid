import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t3c766b8e.css';
import '../../css/d/dmu7i8byd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="t3c766b8e"/><path clip-rule="evenodd" class="dmu7i8byd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:integrated-data-and-research2x-outline"} {...others} />);
}

export default Component;
