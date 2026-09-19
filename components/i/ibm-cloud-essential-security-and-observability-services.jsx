import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxo0d_b0f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nxo0d_b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-essential-security-and-observability-services"} {...others} />);
}

export default Component;
