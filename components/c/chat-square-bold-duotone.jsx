import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/umxn_1jgf.css';
import '../../css/b/bb9sfibcs.css';
import '../../css/i/i60oyac0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="umxn_1jgf"/><path clip-rule="evenodd" class="bb9sfibcs"/><path class="i60oyac0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-bold-duotone"} {...others} />);
}

export default Component;
