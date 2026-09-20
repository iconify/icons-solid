import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/ktnoc0bvp.css';
import '../../css/g/gtm8fkbhm.css';
import '../../css/m/muh49ubmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path clip-rule="evenodd" class="ktnoc0bvp"/><path class="gtm8fkbhm"/></g><path class="muh49ubmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plug-circle-bold-duotone"} {...others} />);
}

export default Component;
