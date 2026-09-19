import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvjhj9bjg.css';
import '../../css/j/jpru1cc9e.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mvjhj9bjg"/><path class="jpru1cc9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:rockylinux-wordmark"} {...others} />);
}

export default Component;
