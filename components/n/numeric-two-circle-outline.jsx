import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow_d5dbav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ow_d5dbav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:numeric-two-circle-outline"} {...others} />);
}

export default Component;
