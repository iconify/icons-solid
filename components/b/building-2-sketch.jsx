import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uch8o2bil.css';
import '../../css/k/k8zyftb7o.css';
import '../../css/w/w74syu_wh.css';
import '../../css/j/j5drt-bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uch8o2bil wm-k"/><path class="k8zyftb7o wm-k"/><path class="w74syu_wh wm-a"/><path class="j5drt-bbv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:building-2-sketch"} {...others} />);
}

export default Component;
