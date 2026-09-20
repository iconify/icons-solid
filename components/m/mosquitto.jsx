import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz0w159ze.css';
import '../../css/k/k5b4rgmdr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iz0w159ze"/><path class="k5b4rgmdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mosquitto"} {...others} />);
}

export default Component;
