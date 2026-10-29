import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g2wdl1bwg.css';
import '../../css/k/kxrjztx3q.css';
import '../../css/v/v9kvji8te.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g2wdl1bwg wm-k"/><path class="kxrjztx3q wm-shadow"/><path class="v9kvji8te wm-k"/><path class="hbi8hhkfx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:locate-fixed-engrave"} {...others} />);
}

export default Component;
