import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ar0kiqktv.css';
import '../../css/p/pa4fm5akg.css';
import '../../css/y/ybtsdob7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ar0kiqktv"/><path class="pa4fm5akg"/><path class="ybtsdob7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:videocamera-off-bold-duotone"} {...others} />);
}

export default Component;
