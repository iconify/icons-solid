import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi9p0vbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pi9p0vbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:chevron-up-circle"} {...others} />);
}

export default Component;
