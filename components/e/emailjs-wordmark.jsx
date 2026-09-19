import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqraoh7pn.css';
import '../../css/a/a7w15ebva.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rqraoh7pn"/><path class="a7w15ebva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:emailjs-wordmark"} {...others} />);
}

export default Component;
