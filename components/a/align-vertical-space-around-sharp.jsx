import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfkwqpsmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfkwqpsmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:align-vertical-space-around-sharp"} {...others} />);
}

export default Component;
