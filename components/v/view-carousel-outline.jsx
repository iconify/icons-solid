import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtdrn6hty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gtdrn6hty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:view-carousel-outline"} {...others} />);
}

export default Component;
