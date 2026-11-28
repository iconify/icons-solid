import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ipbs2sbgw.css';
import '../../css/j/jewombbbr.css';
import '../../css/w/w6gy9zb0t.css';
import '../../css/x/xpofho1qb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ipbs2sbgw"/><path class="jewombbbr"/><path class="w6gy9zb0t"/><path class="xpofho1qb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:toaster"} {...others} />);
}

export default Component;
