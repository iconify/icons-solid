import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m15vzm5ke.css';
import '../../css/x/xhpv1945y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="m15vzm5ke"/><path class="wm-a xhpv1945y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:screwdriver-solid"} {...others} />);
}

export default Component;
