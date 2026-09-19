import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4vvvyndn.css';
import '../../css/l/lrvq4dd-h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="x4vvvyndn"/><path class="lrvq4dd-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:scala-wordmark"} {...others} />);
}

export default Component;
