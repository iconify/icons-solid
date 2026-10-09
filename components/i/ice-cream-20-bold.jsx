import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbhs844iu.css';
import '../../css/v/vpa9dcbvo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gbhs844iu"/><path class="vpa9dcbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-cream-20-bold"} {...others} />);
}

export default Component;
