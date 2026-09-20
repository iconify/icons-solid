import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7z4fccwr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7z4fccwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-up-down-bold-outline"} {...others} />);
}

export default Component;
