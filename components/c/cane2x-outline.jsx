import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9wpg9cgy.css';
import '../../css/x/xyvolmu6b.css';
import '../../css/n/nnw93lbbj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w9wpg9cgy"/><path class="xyvolmu6b"/><path clip-rule="evenodd" class="nnw93lbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cane2x-outline"} {...others} />);
}

export default Component;
