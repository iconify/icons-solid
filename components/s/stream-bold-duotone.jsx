import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybtsdob7h.css';
import '../../css/z/zshnxy2ju.css';
import '../../css/m/mfp2v-4hr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ybtsdob7h"/><path class="zshnxy2ju"/><path class="mfp2v-4hr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stream-bold-duotone"} {...others} />);
}

export default Component;
