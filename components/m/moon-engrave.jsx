import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jt065lb1t.css';
import '../../css/a/aoqg6rbad.css';
import '../../css/s/sfp-qh-hh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jt065lb1t"/><path class="aoqg6rbad wm-shadow"/><path class="sfp-qh-hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:moon-engrave"} {...others} />);
}

export default Component;
