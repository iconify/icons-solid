import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hu-l19bkb.css';
import '../../css/i/i0uwx_b1z.css';
import '../../css/v/vc76h5b8i.css';
import '../../css/c/c1313sbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hu-l19bkb"/><path class="i0uwx_b1z wm-a"/><path class="vc76h5b8i wm-k"/><path class="c1313sbwo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:address-book-sketch"} {...others} />);
}

export default Component;
