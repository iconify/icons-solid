import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1bspmbls.css';
import '../../css/u/uo0d8mbaa.css';
import '../../css/v/vhl0zkx6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i1bspmbls"/><path class="uo0d8mbaa"/><path class="vhl0zkx6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-2-bold-duotone"} {...others} />);
}

export default Component;
