import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjofz7oow.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="vjofz7oow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:forward-10-thin"} {...others} />);
}

export default Component;
