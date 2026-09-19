import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey5-szfvo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ey5-szfvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:pause-20-solid"} {...others} />);
}

export default Component;
