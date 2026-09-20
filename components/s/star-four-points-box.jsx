import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdexnxz5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdexnxz5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:star-four-points-box"} {...others} />);
}

export default Component;
