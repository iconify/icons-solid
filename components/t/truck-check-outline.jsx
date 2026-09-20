import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcg6qzbmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fcg6qzbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:truck-check-outline"} {...others} />);
}

export default Component;
