import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnva4_vbs.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hnva4_vbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:groq-wordmark"} {...others} />);
}

export default Component;
