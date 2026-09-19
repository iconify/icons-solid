import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wl_e0fb9e.css';
import '../../css/e/ewavw_btk.css';
import '../../css/w/whmo1zb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wl_e0fb9e"/><path class="ewavw_btk"/><path class="whmo1zb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:comment-block-01"} {...others} />);
}

export default Component;
