import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjl2x3boh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/p/p2z-q2bky.css';
import '../../css/q/qu31vhabl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wjl2x3boh"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="p2z-q2bky"/><path class="qu31vhabl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-search-duo"} {...others} />);
}

export default Component;
