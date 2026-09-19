import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k360nwb0k.css';
import '../../css/c/clgxr-12w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="k360nwb0k"/><path clip-rule="evenodd" class="clgxr-12w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:city-outline"} {...others} />);
}

export default Component;
