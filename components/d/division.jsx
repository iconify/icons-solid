import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2vq63b3k.css';
import '../../css/q/qufharbmm.css';
import '../../css/p/p9rvr-ggk.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="w2vq63b3k"/><circle class="qufharbmm"/><circle class="p9rvr-ggk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:division"} {...others} />);
}

export default Component;
