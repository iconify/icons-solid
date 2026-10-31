import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gsh6uhw9b.css';
import '../../css/c/c-mksob1y.css';
import '../../css/i/i933f1bro.css';
import '../../css/i/iusb6bcvc.css';
import '../../css/l/lc5ur3ytf.css';
import '../../css/k/kdg51kbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gsh6uhw9b wm-shadow"/><path class="c-mksob1y"/><path class="i933f1bro"/><path class="iusb6bcvc"/><path class="lc5ur3ytf"/><path class="kdg51kbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pen-tool"} {...others} />);
}

export default Component;
