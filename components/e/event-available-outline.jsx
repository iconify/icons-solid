import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3h0oiboe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3h0oiboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:event-available-outline"} {...others} />);
}

export default Component;
