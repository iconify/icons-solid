import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad7le-5la.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/y/yhc39k2dy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ad7le-5la secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="yhc39k2dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shield-sparkles-duo"} {...others} />);
}

export default Component;
