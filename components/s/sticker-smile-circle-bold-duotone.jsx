import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lx7m2-bor.css';
import '../../css/i/iqgdhbc6s.css';
import '../../css/l/l3vfyexrd.css';
import '../../css/c/crykbyqhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lx7m2-bor"/><path class="iqgdhbc6s"/><path class="l3vfyexrd"/><path class="crykbyqhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-circle-bold-duotone"} {...others} />);
}

export default Component;
