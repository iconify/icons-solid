import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q1lwn9b1v.css';
import '../../css/n/njjzi6bxs.css';
import '../../css/p/prwrr3loe.css';
import '../../css/a/a8rtq7b8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q1lwn9b1v wm-k"/><path class="njjzi6bxs wm-shadow"/><path class="prwrr3loe wm-k"/><path class="a8rtq7b8k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cookie-engrave"} {...others} />);
}

export default Component;
