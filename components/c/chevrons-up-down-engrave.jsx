import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p1d1xqfpi.css';
import '../../css/r/ri-cmgb7b.css';
import '../../css/s/shkjd1brf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p1d1xqfpi"/><path class="ri-cmgb7b wm-shadow"/><path class="shkjd1brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-up-down-engrave"} {...others} />);
}

export default Component;
