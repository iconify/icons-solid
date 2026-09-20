import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq-kp1o7e.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="eq-kp1o7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:slash-backward"} {...others} />);
}

export default Component;
