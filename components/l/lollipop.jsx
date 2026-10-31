import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/grtsi1brp.css';
import '../../css/b/bzvmn6b6m.css';
import '../../css/u/un4hoccds.css';
import '../../css/t/t-1nknb8k.css';
import '../../css/x/xavj4ctvx.css';
import '../../css/d/d69a1ti0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="grtsi1brp wm-shadow"/><path class="bzvmn6b6m"/><path class="un4hoccds"/><path class="t-1nknb8k"/><path class="xavj4ctvx"/><path class="d69a1ti0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lollipop"} {...others} />);
}

export default Component;
