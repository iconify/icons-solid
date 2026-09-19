import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w63tedcfl.css';
import '../../css/f/f_2qjsb7v.css';
import '../../css/n/nc19r8l8f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="w63tedcfl"/><path class="f_2qjsb7v"/><path class="nc19r8l8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:eslint-wordmark"} {...others} />);
}

export default Component;
