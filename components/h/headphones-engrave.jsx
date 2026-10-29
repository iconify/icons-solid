import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i09dd_iqf.css';
import '../../css/k/kxbkcp9wd.css';
import '../../css/v/v3dbaokhc.css';
import '../../css/r/r0v6itbzy.css';
import '../../css/l/ltpyfabni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i09dd_iqf wm-k"/><path class="kxbkcp9wd wm-a"/><path class="v3dbaokhc wm-shadow"/><path class="r0v6itbzy wm-a"/><path class="ltpyfabni wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headphones-engrave"} {...others} />);
}

export default Component;
