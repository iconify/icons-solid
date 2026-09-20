import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnflixb5n.css';
import '../../css/y/ya_0htb4d.css';
import '../../css/a/a1vkogs_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vnflixb5n"/><path class="ya_0htb4d"/><path class="a1vkogs_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-double-alt-arrow-down-bold-duotone"} {...others} />);
}

export default Component;
