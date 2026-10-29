import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h7c3qx-ae.css';
import '../../css/u/uwi6pe5sg.css';
import '../../css/p/p_w6bcb-q.css';
import '../../css/r/rj25d81vo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h7c3qx-ae wm-k"/><path class="uwi6pe5sg wm-a"/><path class="p_w6bcb-q wm-k"/><path class="rj25d81vo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-first-sketch"} {...others} />);
}

export default Component;
