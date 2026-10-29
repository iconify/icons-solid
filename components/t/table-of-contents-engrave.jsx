import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yj4kgvbfy.css';
import '../../css/t/trjdf1poy.css';
import '../../css/c/ctmr3ibhd.css';
import '../../css/x/x-p4m3puv.css';
import '../../css/s/szd75cbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yj4kgvbfy"/><path class="trjdf1poy wm-a"/><path class="ctmr3ibhd wm-shadow"/><path class="wm-k x-p4m3puv"/><path class="szd75cbmw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:table-of-contents-engrave"} {...others} />);
}

export default Component;
