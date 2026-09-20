import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuumn07mq.css';
import '../../css/l/lzm1bzrhh.css';
import '../../css/l/l0xanab5d.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/hxivuvthh.css';
import '../../css/s/s920ixbuf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fuumn07mq"/><path class="lzm1bzrhh"/><path class="l0xanab5d"/><g class="ij2x_72vy"><path class="hxivuvthh"/><path class="s920ixbuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:umbrella"} {...others} />);
}

export default Component;
