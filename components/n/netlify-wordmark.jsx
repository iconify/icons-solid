import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd9kb2bas.css';
import '../../css/l/l19uj4vqh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dd9kb2bas"/><path class="l19uj4vqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:netlify-wordmark"} {...others} />);
}

export default Component;
