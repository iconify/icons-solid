import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vrui9ubxc.css';
import '../../css/u/uanjz8m2o.css';
import '../../css/w/wri5opbdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vrui9ubxc"/><path class="uanjz8m2o wm-a"/><path class="wri5opbdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-tree-duo"} {...others} />);
}

export default Component;
