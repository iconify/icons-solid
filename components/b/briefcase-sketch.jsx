import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k3k-_vkxl.css';
import '../../css/k/kmgkpdb0r.css';
import '../../css/p/pfitmhbyp.css';
import '../../css/r/rk_aglbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k3k-_vkxl"/><path class="kmgkpdb0r wm-a"/><path class="pfitmhbyp wm-k"/><path class="rk_aglbyi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-sketch"} {...others} />);
}

export default Component;
