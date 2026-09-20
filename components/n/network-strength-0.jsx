import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn8k5hbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nn8k5hbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:network-strength-0"} {...others} />);
}

export default Component;
