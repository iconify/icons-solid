import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ghx2y3b3m.css';
import '../../css/w/wvp2hjbpw.css';
import '../../css/o/oqwpskbbm.css';
import '../../css/j/j-82xe69i.css';
import '../../css/g/g3zxq2omy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ghx2y3b3m wm-shadow"/><path class="wvp2hjbpw"/><path class="oqwpskbbm"/><path class="j-82xe69i"/><path class="g3zxq2omy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cricket"} {...others} />);
}

export default Component;
