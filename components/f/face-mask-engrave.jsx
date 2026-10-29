import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bvupyobzo.css';
import '../../css/u/uqb8hz1bt.css';
import '../../css/k/kewz__byf.css';
import '../../css/a/a6ey7sbng.css';
import '../../css/r/rvvxdgw4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bvupyobzo wm-k"/><path class="uqb8hz1bt wm-a"/><path class="kewz__byf wm-shadow"/><path class="a6ey7sbng wm-k"/><path class="rvvxdgw4h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:face-mask-engrave"} {...others} />);
}

export default Component;
