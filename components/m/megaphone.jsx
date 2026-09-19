import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k3yvm1bga.css';
import '../../css/w/w0y2p_yfp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="k3yvm1bga"/><path clip-rule="evenodd" class="w0y2p_yfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:megaphone"} {...others} />);
}

export default Component;
