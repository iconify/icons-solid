import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j3if_hfek.css';
import '../../css/v/vnolbp_wl.css';
import '../../css/p/p5btdgb1w.css';
import '../../css/d/dwthvn6kc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="j3if_hfek wm-shadow"/><path class="vnolbp_wl wm-shadow"/><path class="p5btdgb1w"/><path class="dwthvn6kc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lotus"} {...others} />);
}

export default Component;
