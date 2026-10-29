import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lc1-hobqk.css';
import '../../css/i/ic6g-5rno.css';
import '../../css/p/pfaupr37u.css';
import '../../css/s/sik9nkdak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lc1-hobqk wm-k"/><path class="ic6g-5rno"/><path class="pfaupr37u"/><path class="sik9nkdak wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:video-plus"} {...others} />);
}

export default Component;
