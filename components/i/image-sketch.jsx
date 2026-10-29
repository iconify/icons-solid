import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dgsjy9b9z.css';
import '../../css/y/yauv4zzce.css';
import '../../css/v/v2r3rlblx.css';
import '../../css/c/c-1i_6wtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dgsjy9b9z"/><path class="wm-a yauv4zzce"/><path class="v2r3rlblx wm-k"/><path class="c-1i_6wtz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-sketch"} {...others} />);
}

export default Component;
