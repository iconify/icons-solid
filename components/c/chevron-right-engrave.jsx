import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/da795db8g.css';
import '../../css/w/wl3vkgwgq.css';
import '../../css/r/rat7bsbmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="da795db8g"/><path class="wl3vkgwgq wm-shadow"/><path class="rat7bsbmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-right-engrave"} {...others} />);
}

export default Component;
