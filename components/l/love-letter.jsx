import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/ltypt_bur.css';
import '../../css/l/ly72_5s5b.css';
import '../../css/y/yex6b0bsc.css';
import '../../css/j/j1t9dzbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ltypt_bur wm-k"/><path class="ly72_5s5b wm-s"/><path class="yex6b0bsc"/><path class="j1t9dzbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:love-letter"} {...others} />);
}

export default Component;
