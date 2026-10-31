import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jtzlfvfrb.css';
import '../../css/k/k5gji0b3z.css';
import '../../css/f/fmi7dwbjs.css';
import '../../css/w/waro2vijr.css';
import '../../css/y/ydestl3ms.css';
import '../../css/k/kr4v636_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jtzlfvfrb wm-shadow"/><path class="k5gji0b3z"/><path class="fmi7dwbjs"/><path class="waro2vijr"/><path class="ydestl3ms"/><path class="kr4v636_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:tombstone"} {...others} />);
}

export default Component;
