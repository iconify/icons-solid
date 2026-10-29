import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y51shub2s.css';
import '../../css/q/qxwv1nbma.css';
import '../../css/l/l5bot_fnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="y51shub2s"/><path class="qxwv1nbma wm-shadow"/><path class="l5bot_fnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:filter-engrave"} {...others} />);
}

export default Component;
