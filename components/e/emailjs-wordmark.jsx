import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/der1z-x1u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="der1z-x1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:emailjs-wordmark"} {...others} />);
}

export default Component;
