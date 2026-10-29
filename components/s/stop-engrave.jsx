import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g-anivbbg.css';
import '../../css/p/p3d1spb0g.css';
import '../../css/m/m_gu8i8bb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g-anivbbg"/><path class="p3d1spb0g wm-shadow"/><path class="m_gu8i8bb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stop-engrave"} {...others} />);
}

export default Component;
