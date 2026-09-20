import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xedtc1bcc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xedtc1bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-hypper-dark"} {...others} />);
}

export default Component;
