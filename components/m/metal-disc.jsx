import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly5l7q92e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ly5l7q92e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:metal-disc"} {...others} />);
}

export default Component;
