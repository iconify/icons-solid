import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wstva3b-l.css';
import '../../css/l/lnwbmf5ky.css';
import '../../css/o/ory6bvb6n.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wstva3b-l"/><path clip-rule="evenodd" class="lnwbmf5ky"/><path class="ory6bvb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:internet"} {...others} />);
}

export default Component;
