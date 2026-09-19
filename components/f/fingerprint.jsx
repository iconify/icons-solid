import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyz0h_7-h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eyz0h_7-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:fingerprint"} {...others} />);
}

export default Component;
