import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe3omq5yn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fe3omq5yn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:disk-alert"} {...others} />);
}

export default Component;
