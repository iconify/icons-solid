import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vda9rfbmq.css';
import '../../css/w/w48x_3bbu.css';
import '../../css/l/l81713mvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vda9rfbmq"/><path class="w48x_3bbu"/><path class="l81713mvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:android-1"} {...others} />);
}

export default Component;
