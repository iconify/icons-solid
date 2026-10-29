import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/erpaaj0nr.css';
import '../../css/j/jgyokzbac.css';
import '../../css/r/r43my2bli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="erpaaj0nr"/><path class="jgyokzbac wm-shadow"/><path class="r43my2bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rolling-pin-engrave"} {...others} />);
}

export default Component;
