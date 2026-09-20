import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-0y2lb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-0y2lb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-point-of-sale-star"} {...others} />);
}

export default Component;
