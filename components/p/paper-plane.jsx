import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj5x9wddi.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="oj5x9wddi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:paper-plane"} {...others} />);
}

export default Component;
