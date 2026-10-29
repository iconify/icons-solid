import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xouepfbxt.css';
import '../../css/o/o75np-b8h.css';
import '../../css/p/p1-mhho-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xouepfbxt"/><path class="o75np-b8h wm-shadow"/><path class="p1-mhho-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-center-engrave"} {...others} />);
}

export default Component;
