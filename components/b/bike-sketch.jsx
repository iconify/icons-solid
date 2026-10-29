import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i0hl2x5zy.css';
import '../../css/n/n87wq02dx.css';
import '../../css/h/hdrn7h4ca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i0hl2x5zy wm-a"/><path class="n87wq02dx wm-k"/><path class="hdrn7h4ca wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bike-sketch"} {...others} />);
}

export default Component;
