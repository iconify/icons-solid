import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcr65cb0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fcr65cb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:thumbs-down-outline"} {...others} />);
}

export default Component;
