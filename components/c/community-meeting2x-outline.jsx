import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdz824bdr.css';
import '../../css/c/cgcf9vb8w.css';
import '../../css/j/jyz616zsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pdz824bdr"/><path clip-rule="evenodd" class="cgcf9vb8w"/><path class="jyz616zsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:community-meeting2x-outline"} {...others} />);
}

export default Component;
