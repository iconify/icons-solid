import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk0bp2b6e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vk0bp2b6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:iowa-with-capital-star"} {...others} />);
}

export default Component;
