import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j1c5z9bpg.css';
import '../../css/b/b5krwpbty.css';
import '../../css/t/t4ya6qb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j1c5z9bpg"/><path class="b5krwpbty wm-shadow"/><path class="t4ya6qb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signal-engrave"} {...others} />);
}

export default Component;
