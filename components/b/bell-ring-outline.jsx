import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na7e-6bbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="na7e-6bbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bell-ring-outline"} {...others} />);
}

export default Component;
