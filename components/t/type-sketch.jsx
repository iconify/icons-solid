import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g5ps4wb3c.css';
import '../../css/v/vrn_zwi2z.css';
import '../../css/w/w574b0b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g5ps4wb3c wm-k"/><path class="vrn_zwi2z wm-k"/><path class="w574b0b2r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:type-sketch"} {...others} />);
}

export default Component;
