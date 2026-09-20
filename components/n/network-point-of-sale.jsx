import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3jz38zow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3jz38zow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:network-point-of-sale"} {...others} />);
}

export default Component;
