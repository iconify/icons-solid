import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sghq9ybsb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sghq9ybsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:self-hosted-gateway-dark"} {...others} />);
}

export default Component;
