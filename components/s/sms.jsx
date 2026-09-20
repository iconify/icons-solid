import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/v/vhz0i7kxa.css';
import '../../css/k/k_fmhwxlq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="vhz0i7kxa"/><path class="k_fmhwxlq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sms"} {...others} />);
}

export default Component;
