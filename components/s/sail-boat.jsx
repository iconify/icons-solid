import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwl7ukh2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwl7ukh2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sail-boat"} {...others} />);
}

export default Component;
