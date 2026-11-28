import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkza26tve.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="vkza26tve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:satellite-dish-fill"} {...others} />);
}

export default Component;
