import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qfr20kqki.css';
import '../../css/w/w-5j7-bsb.css';
import '../../css/w/w_8fmvbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qfr20kqki"/><path clip-rule="evenodd" class="w-5j7-bsb"/><path clip-rule="evenodd" class="w_8fmvbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-clock-outline"} {...others} />);
}

export default Component;
