import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu07fk1vk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fu07fk1vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:do-not-disturb-on"} {...others} />);
}

export default Component;
