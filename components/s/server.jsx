import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pfbjbebmh.css';
import '../../css/s/s6wi2fiqk.css';
import '../../css/c/cdgxmnxdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pfbjbebmh"/><path class="s6wi2fiqk"/><path class="cdgxmnxdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:server"} {...others} />);
}

export default Component;
