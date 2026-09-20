import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hasd5_p3j.css';
import '../../css/s/sv36czx6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><rect class="hasd5_p3j"/><rect class="sv36czx6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:pause"} {...others} />);
}

export default Component;
