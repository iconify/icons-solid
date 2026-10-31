import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xhipxm8ms.css';
import '../../css/y/yuyr3cbzg.css';
import '../../css/o/obc4ec60a.css';
import '../../css/c/c0iv2xb_l.css';
import '../../css/w/wkevs_28k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xhipxm8ms"/><path class="yuyr3cbzg"/><path class="obc4ec60a"/><path class="c0iv2xb_l"/><path class="wkevs_28k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:black-cat"} {...others} />);
}

export default Component;
