import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_jxjbi0r.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="g_jxjbi0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:directions-car"} {...others} />);
}

export default Component;
