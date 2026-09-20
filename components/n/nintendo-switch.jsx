import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3gsrgbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3gsrgbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:nintendo-switch"} {...others} />);
}

export default Component;
