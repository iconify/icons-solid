import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xdami-kyz.css';
import '../../css/i/ip-ph748q.css';
import '../../css/t/t8101zb8u.css';
import '../../css/f/fyprvmbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xdami-kyz"/><path class="ip-ph748q"/><path class="t8101zb8u"/><path class="fyprvmbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:telescope"} {...others} />);
}

export default Component;
