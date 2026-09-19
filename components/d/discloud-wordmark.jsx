import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydv6ohbun.css';
import '../../css/g/g-mfsnbds.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ydv6ohbun"/><path class="g-mfsnbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:discloud-wordmark"} {...others} />);
}

export default Component;
