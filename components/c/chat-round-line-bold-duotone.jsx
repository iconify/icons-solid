import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wr-u5pbye.css';
import '../../css/i/i8zp6bckl.css';
import '../../css/r/rm076e2fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wr-u5pbye"/><path class="i8zp6bckl"/><path class="rm076e2fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-line-bold-duotone"} {...others} />);
}

export default Component;
