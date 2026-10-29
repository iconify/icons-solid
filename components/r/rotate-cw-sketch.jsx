import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wqnb7yhih.css';
import '../../css/x/x_-hjm_0s.css';
import '../../css/o/oqn6xvsmt.css';
import '../../css/g/gji7ap19f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k wqnb7yhih"/><path class="wm-a x_-hjm_0s"/><path class="oqn6xvsmt wm-k"/><path class="gji7ap19f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rotate-cw-sketch"} {...others} />);
}

export default Component;
