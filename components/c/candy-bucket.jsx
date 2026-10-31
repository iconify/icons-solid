import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yn5hsstgm.css';
import '../../css/u/uxzalpldh.css';
import '../../css/h/heu5j0_nm.css';
import '../../css/q/qwx26pbpx.css';
import '../../css/u/u_o79h-mp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yn5hsstgm"/><path class="uxzalpldh wm-shadow"/><path class="heu5j0_nm"/><path class="qwx26pbpx"/><path class="u_o79h-mp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:candy-bucket"} {...others} />);
}

export default Component;
