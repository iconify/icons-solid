import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdluwybfk.css';
import '../../css/m/mheepubkm.css';
import '../../css/z/zqqq62brb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xdluwybfk"/><path class="mheepubkm"/><path clip-rule="evenodd" class="zqqq62brb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:entry2x-outline"} {...others} />);
}

export default Component;
