import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o7ull5bnt.css';
import '../../css/v/vu3k_039v.css';
import '../../css/z/zp1t379qi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o7ull5bnt"/><path class="vu3k_039v wm-a"/><path class="wm-s zp1t379qi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hot-cocoa"} {...others} />);
}

export default Component;
