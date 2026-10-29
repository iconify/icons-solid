import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r-0p0fbzi.css';
import '../../css/j/j6mk4rb0u.css';
import '../../css/b/bg_4nf-bb.css';
import '../../css/p/p5gauvcbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r-0p0fbzi"/><path class="j6mk4rb0u wm-k"/><path class="bg_4nf-bb wm-k"/><path class="p5gauvcbg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-check-sketch"} {...others} />);
}

export default Component;
