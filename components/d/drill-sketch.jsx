import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eim7--b-x.css';
import '../../css/b/btxwm6bkt.css';
import '../../css/u/u6jpcwfqz.css';
import '../../css/y/ykgfagzcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eim7--b-x"/><path class="btxwm6bkt wm-k"/><path class="u6jpcwfqz wm-k"/><path class="wm-a ykgfagzcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drill-sketch"} {...others} />);
}

export default Component;
