import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eih6p2brr.css';
import '../../css/y/yx_i_xr_j.css';
import '../../css/x/xag12fycu.css';
import '../../css/t/thjai3b7b.css';
import '../../css/y/y-0890bon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="eih6p2brr wm-deco"/><path class="wm-deco yx_i_xr_j"/><path class="wm-deco xag12fycu"/><path class="thjai3b7b wm-k"/><path class="wm-s y-0890bon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unlink-blueprint"} {...others} />);
}

export default Component;
