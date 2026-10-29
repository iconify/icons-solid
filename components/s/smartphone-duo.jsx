import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cdh-j4bgg.css';
import '../../css/h/hkcj5-bst.css';
import '../../css/z/zzgumwbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cdh-j4bgg"/><path class="hkcj5-bst wm-a"/><path class="zzgumwbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smartphone-duo"} {...others} />);
}

export default Component;
