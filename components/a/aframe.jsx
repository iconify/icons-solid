import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6j2i1bzb.css';
import '../../css/n/nwa55i2nd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="f6j2i1bzb"/><path class="nwa55i2nd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:aframe"} {...others} />);
}

export default Component;
