import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktj6559nw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktj6559nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:view-day-outline"} {...others} />);
}

export default Component;
