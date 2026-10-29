import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pygoucb3a.css';
import '../../css/m/may1ezb7m.css';
import '../../css/h/hm9dey-ai.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/v/vjq2cpb8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pygoucb3a wm-k"/><path class="may1ezb7m wm-a"/><path class="hm9dey-ai wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="vjq2cpb8i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:globe-engrave"} {...others} />);
}

export default Component;
