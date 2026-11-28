import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk_z0sbwn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wt5ycxxxi.css';
import '../../css/f/fa6fplbeg.css';
import '../../css/v/vndf8ubme.css';
import '../../css/w/wn8h4acsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nk_z0sbwn secondary"/><g class="dt0cm9dhy primary"><path class="wt5ycxxxi"/><path class="fa6fplbeg"/><path class="vndf8ubme"/><path class="wn8h4acsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:columns-4-duo"} {...others} />);
}

export default Component;
