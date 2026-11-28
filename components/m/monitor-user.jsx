import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/i/izggtwq7w.css';
import '../../css/s/sxr14vmgm.css';
import '../../css/n/n6d6eun0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uuw1qkbsv"/><path class="izggtwq7w"/><path class="sxr14vmgm"/><path class="n6d6eun0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-user"} {...others} />);
}

export default Component;
