import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c8j_n0b7j.css';
import '../../css/w/wepkbcchs.css';
import '../../css/r/rc36gxb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="c8j_n0b7j"/><path class="wepkbcchs wm-a"/><path class="rc36gxb1s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lunar-drum-solid"} {...others} />);
}

export default Component;
