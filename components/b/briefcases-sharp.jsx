import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4u0-9bit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r4u0-9bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:briefcases-sharp"} {...others} />);
}

export default Component;
