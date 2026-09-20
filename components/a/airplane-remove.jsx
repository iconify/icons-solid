import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do4-2pbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="do4-2pbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:airplane-remove"} {...others} />);
}

export default Component;
