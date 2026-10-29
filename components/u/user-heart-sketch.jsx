import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p5q7ejjeb.css';
import '../../css/n/n8bgkq-wu.css';
import '../../css/i/i5cakcclp.css';
import '../../css/l/l69d02b_x.css';
import '../../css/d/dlnj7q4lj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p5q7ejjeb"/><path class="n8bgkq-wu wm-k"/><path class="i5cakcclp wm-s"/><path class="l69d02b_x wm-k"/><path class="dlnj7q4lj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-heart-sketch"} {...others} />);
}

export default Component;
