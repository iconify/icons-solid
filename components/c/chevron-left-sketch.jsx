import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sw531mb4i.css';
import '../../css/t/tdvd_6b2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sw531mb4i wm-k"/><path class="tdvd_6b2x wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-left-sketch"} {...others} />);
}

export default Component;
