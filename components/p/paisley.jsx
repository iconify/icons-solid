import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yxa4pbbgv.css';
import '../../css/y/ynqmjxh6x.css';
import '../../css/o/o3qx-w_0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yxa4pbbgv"/><path class="wm-a ynqmjxh6x"/><path class="o3qx-w_0y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paisley"} {...others} />);
}

export default Component;
