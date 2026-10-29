import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ah46elb3h.css';
import '../../css/c/c60tcacvt.css';
import '../../css/d/d8hyaw_-d.css';
import '../../css/k/kj80ggv8d.css';
import '../../css/i/iy-yox1gu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ah46elb3h wm-k"/><path class="c60tcacvt wm-a"/><path class="d8hyaw_-d wm-k"/><path class="kj80ggv8d wm-a"/><path class="iy-yox1gu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-cog-sketch"} {...others} />);
}

export default Component;
