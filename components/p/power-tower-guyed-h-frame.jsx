import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8d1u194e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l8d1u194e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:power-tower-guyed-h-frame"} {...others} />);
}

export default Component;
