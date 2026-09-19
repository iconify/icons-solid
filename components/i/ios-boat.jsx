import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_k7_fb0a.css';
import '../../css/h/hrwuikbxl.css';
import '../../css/o/olalq2vor.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t_k7_fb0a"/><path class="hrwuikbxl"/><path class="olalq2vor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-boat"} {...others} />);
}

export default Component;
