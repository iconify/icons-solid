import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hri_yxbcb.css';
import '../../css/n/noyl5dl3k.css';
import '../../css/c/c4nv1ybwa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hri_yxbcb"/><path clip-rule="evenodd" class="noyl5dl3k"/><path class="c4nv1ybwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:bandage-adhesive2x-outline"} {...others} />);
}

export default Component;
