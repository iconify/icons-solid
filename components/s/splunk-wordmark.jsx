import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh2bigb3y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rh2bigb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:splunk-wordmark"} {...others} />);
}

export default Component;
