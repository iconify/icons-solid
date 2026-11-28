import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co2u-_axd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k_280xbgm.css';
import '../../css/p/ps-_u7tyq.css';
import '../../css/h/h3_zgubvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="co2u-_axd secondary"/><g class="dt0cm9dhy primary"><path class="k_280xbgm"/><path class="ps-_u7tyq"/><path class="h3_zgubvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hd-duo"} {...others} />);
}

export default Component;
