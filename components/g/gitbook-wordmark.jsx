import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yme_38p6e.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yme_38p6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gitbook-wordmark"} {...others} />);
}

export default Component;
