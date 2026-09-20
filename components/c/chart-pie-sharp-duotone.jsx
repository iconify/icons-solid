import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4npdi48e.css';
import '../../css/i/i61rutual.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m4npdi48e"/><path class="i61rutual"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-pie-sharp-duotone"} {...others} />);
}

export default Component;
