import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk93trgoj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vk93trgoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:buddicons-buddypress-logo"} {...others} />);
}

export default Component;
