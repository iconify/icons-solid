import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aocp3_gja.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aocp3_gja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-webmethods-api-gateway"} {...others} />);
}

export default Component;
