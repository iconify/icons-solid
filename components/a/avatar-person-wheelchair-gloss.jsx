import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mmeghsbik.css';
import '../../css/x/xzxx-xbck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="mmeghsbik wm-k"/><path class="wm-a xzxx-xbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-wheelchair-gloss"} {...others} />);
}

export default Component;
