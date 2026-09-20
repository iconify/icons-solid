import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jppv-o5ye.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="jppv-o5ye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:ticket"} {...others} />);
}

export default Component;
