import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mfu0bffic.css';
import '../../css/i/ifgkj9b_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="mfu0bffic wm-k"/><path class="ifgkj9b_x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-top-gloss"} {...others} />);
}

export default Component;
