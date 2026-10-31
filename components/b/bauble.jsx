import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vk5i4fbub.css';
import '../../css/o/oi3zr5bto.css';
import '../../css/f/fgmj-mbam.css';
import '../../css/v/v1r0nsbtz.css';
import '../../css/m/m_g5wzc_l.css';
import '../../css/i/ikb8hhbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vk5i4fbub wm-shadow"/><path class="oi3zr5bto"/><path class="fgmj-mbam"/><path class="v1r0nsbtz"/><path class="m_g5wzc_l"/><path class="ikb8hhbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bauble"} {...others} />);
}

export default Component;
