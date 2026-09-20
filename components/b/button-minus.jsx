import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmc0r12qn.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="tmc0r12qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:button-minus"} {...others} />);
}

export default Component;
