import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b_uq6-6qm.css';
import '../../css/j/j-0g3nb-u.css';
import '../../css/o/on6hknbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b_uq6-6qm"/><path class="j-0g3nb-u wm-shadow"/><path class="on6hknbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:puzzle-piece-engrave"} {...others} />);
}

export default Component;
