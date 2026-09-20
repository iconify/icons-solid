import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pubfbmb7r.css';
import '../../css/p/p_8skf9pq.css';
import '../../css/f/f_qs10cpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pubfbmb7r"/><path class="p_8skf9pq"/><path class="f_qs10cpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:heart-hand-sharp-duotone"} {...others} />);
}

export default Component;
