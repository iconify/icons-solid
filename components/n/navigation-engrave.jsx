import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uxuqlo1po.css';
import '../../css/s/sq_axr2cd.css';
import '../../css/q/qbtperb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uxuqlo1po"/><path class="sq_axr2cd wm-shadow"/><path class="qbtperb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:navigation-engrave"} {...others} />);
}

export default Component;
