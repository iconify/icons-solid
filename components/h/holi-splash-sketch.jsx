import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lbj85ed8c.css';
import '../../css/z/zzhn1q2in.css';
import '../../css/g/g3kzkz79z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lbj85ed8c wm-k"/><path class="wm-a zzhn1q2in"/><path class="g3kzkz79z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:holi-splash-sketch"} {...others} />);
}

export default Component;
