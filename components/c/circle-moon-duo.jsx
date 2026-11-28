import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo01ujvaa.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/u/uv6bwxswk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bo01ujvaa secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="uv6bwxswk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-moon-duo"} {...others} />);
}

export default Component;
