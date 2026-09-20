import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgwtpp27u.css';
import '../../css/v/v26h66bss.css';
import '../../css/i/i5bmjjazl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zgwtpp27u"/><path class="v26h66bss"/><path class="i5bmjjazl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-bolt-bold-duotone"} {...others} />);
}

export default Component;
