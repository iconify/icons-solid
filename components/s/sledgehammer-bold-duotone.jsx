import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0q0n-unl.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xhtmzff9z.css';
import '../../css/v/v2j-f2pit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i0q0n-unl"/><g class="mc2zb0bvp"><path class="xhtmzff9z"/><path class="v2j-f2pit"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sledgehammer-bold-duotone"} {...others} />);
}

export default Component;
