import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl9mpu3fh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nl9mpu3fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:css-stroke-20"} {...others} />);
}

export default Component;
