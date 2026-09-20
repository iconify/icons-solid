import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayl3yr5fw.css';
import '../../css/w/wyu8pxfbe.css';
import '../../css/a/apm0xsbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ayl3yr5fw"/><path class="wyu8pxfbe"/><path clip-rule="evenodd" class="apm0xsbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-path-connect-bold-duotone"} {...others} />);
}

export default Component;
