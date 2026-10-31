import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fni4lzbcb.css';
import '../../css/z/z_3d1cc6q.css';
import '../../css/w/wdoc2acjm.css';
import '../../css/f/fhrp8xh8u.css';
import '../../css/b/bjw2suxaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="fni4lzbcb"><path class="wm-shadow z_3d1cc6q"/><path class="wdoc2acjm"/><path class="fhrp8xh8u"/><path class="bjw2suxaa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:scroll-text"} {...others} />);
}

export default Component;
