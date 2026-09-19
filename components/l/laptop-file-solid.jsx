import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkp34ciwb.css';
import '../../css/q/q9puj3dcd.css';
import '../../css/w/w_fsnfbca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wkp34ciwb"/><path class="q9puj3dcd"/><path class="w_fsnfbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:laptop-file-solid"} {...others} />);
}

export default Component;
