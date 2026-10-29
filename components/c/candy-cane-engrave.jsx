import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lne6ksbmw.css';
import '../../css/r/rk2-atb8x.css';
import '../../css/k/k4kerw0_e.css';
import '../../css/u/uya6wcbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lne6ksbmw wm-k"/><path class="rk2-atb8x wm-shadow"/><path class="k4kerw0_e wm-k"/><path class="uya6wcbfz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-cane-engrave"} {...others} />);
}

export default Component;
