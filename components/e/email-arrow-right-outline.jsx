import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc30tubfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gc30tubfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:email-arrow-right-outline"} {...others} />);
}

export default Component;
