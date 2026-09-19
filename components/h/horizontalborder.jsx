import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tor7uzoal.css';

const viewBox = {"width":960,"height":960};
const content = `<path class="tor7uzoal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:horizontalborder"} {...others} />);
}

export default Component;
