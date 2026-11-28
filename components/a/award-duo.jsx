import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adm-aouqi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wys62rbgd.css';
import '../../css/v/v0kt71byo.css';
import '../../css/o/oo4ydnuvq.css';
import '../../css/f/fo0pchbda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="adm-aouqi secondary"/><g class="dt0cm9dhy primary"><path class="wys62rbgd"/><path class="v0kt71byo"/><path class="oo4ydnuvq"/><path class="fo0pchbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:award-duo"} {...others} />);
}

export default Component;
