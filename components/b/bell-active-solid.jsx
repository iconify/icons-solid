import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsl8tybzt.css';
import '../../css/a/a0n6y4bzr.css';
import '../../css/s/s0y15yb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qsl8tybzt"/><path clip-rule="evenodd" class="a0n6y4bzr"/><path class="s0y15yb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:bell-active-solid"} {...others} />);
}

export default Component;
