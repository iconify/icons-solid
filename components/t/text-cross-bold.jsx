import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/si8v7jbgr.css';
import '../../css/g/gtawe4d4l.css';
import '../../css/e/e5clwxbmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="si8v7jbgr"/><path class="gtawe4d4l"/><path class="e5clwxbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-cross-bold"} {...others} />);
}

export default Component;
