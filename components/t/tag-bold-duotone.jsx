import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iu1vzj1bo.css';
import '../../css/r/rebatbbcn.css';
import '../../css/p/p17x-j9nk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iu1vzj1bo"/><path class="rebatbbcn"/><path class="p17x-j9nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-bold-duotone"} {...others} />);
}

export default Component;
