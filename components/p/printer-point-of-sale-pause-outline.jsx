import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn9z0ybli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xn9z0ybli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-point-of-sale-pause-outline"} {...others} />);
}

export default Component;
