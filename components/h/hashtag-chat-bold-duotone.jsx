import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwcfj9bbi.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/y7nc0n54c.css';
import '../../css/a/ad4rbcc7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hwcfj9bbi"/><g class="mc2zb0bvp"><path class="y7nc0n54c"/><path class="ad4rbcc7x"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-chat-bold-duotone"} {...others} />);
}

export default Component;
