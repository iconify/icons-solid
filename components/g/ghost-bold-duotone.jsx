import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f8iql8u_l.css';
import '../../css/u/un7ztky7q.css';
import '../../css/v/vnbx2b2zx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f8iql8u_l"/><path class="un7ztky7q"/><path class="vnbx2b2zx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-bold-duotone"} {...others} />);
}

export default Component;
