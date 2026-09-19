import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygjwjl6cp.css';
import '../../css/j/j15unt4yn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ygjwjl6cp"/><path class="j15unt4yn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pyscript-wordmark"} {...others} />);
}

export default Component;
