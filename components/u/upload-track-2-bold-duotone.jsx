import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n24h_0m1z.css';
import '../../css/u/uxwik3zjv.css';
import '../../css/y/ytqy4dbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n24h_0m1z"/><path class="uxwik3zjv"/><path class="ytqy4dbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-2-bold-duotone"} {...others} />);
}

export default Component;
