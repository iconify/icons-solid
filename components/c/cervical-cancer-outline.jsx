import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zo8k5kb-x.css';
import '../../css/e/ejrk76bap.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="zo8k5kb-x"/><path clip-rule="evenodd" class="ejrk76bap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cervical-cancer-outline"} {...others} />);
}

export default Component;
