import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ky_fwf62h.css';
import '../../css/v/vgr4z6bwb.css';
import '../../css/h/h0i813b-n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ky_fwf62h"/><path class="vgr4z6bwb"/><path clip-rule="evenodd" class="h0i813b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-a-p-outline"} {...others} />);
}

export default Component;
