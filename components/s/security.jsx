import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5t1omb0s.css';
import '../../css/e/ey3vbs2kb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c5t1omb0s"/><path class="ey3vbs2kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:security"} {...others} />);
}

export default Component;
