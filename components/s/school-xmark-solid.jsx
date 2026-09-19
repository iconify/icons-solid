import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1rgjueje.css';
import '../../css/g/gdumllbcd.css';
import '../../css/o/oi_e6acli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q1rgjueje"/><path clip-rule="evenodd" class="gdumllbcd"/><path class="oi_e6acli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-xmark-solid"} {...others} />);
}

export default Component;
