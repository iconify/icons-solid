import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wys62rbgd.css';
import '../../css/p/ptb72kb0a.css';
import '../../css/o/oo4ydnuvq.css';
import '../../css/f/fo0pchbda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wys62rbgd"/><path class="ptb72kb0a"/><path class="oo4ydnuvq"/><path class="fo0pchbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ribbon-star"} {...others} />);
}

export default Component;
