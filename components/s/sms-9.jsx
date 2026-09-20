import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_k0w1bio.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_k0w1bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:sms-9"} {...others} />);
}

export default Component;
