import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9b9k5mif.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j9b9k5mif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:allergies"} {...others} />);
}

export default Component;
