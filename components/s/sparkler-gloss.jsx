import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f2jvjxbna.css';
import '../../css/h/hj4u-fdzu.css';
import '../../css/i/ixxoxcb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="f2jvjxbna wm-k"/><path class="hj4u-fdzu wm-a"/><path class="ixxoxcb0x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sparkler-gloss"} {...others} />);
}

export default Component;
