import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttsgbty3f.css';
import '../../css/r/rkn7cdc2p.css';
import '../../css/m/mow6e1kbh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ttsgbty3f"/><path class="rkn7cdc2p"/><path clip-rule="evenodd" class="mow6e1kbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:coughing-alt-outline"} {...others} />);
}

export default Component;
