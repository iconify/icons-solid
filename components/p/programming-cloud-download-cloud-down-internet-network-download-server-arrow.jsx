import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqxey5aoc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gqxey5aoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-cloud-download-cloud-down-internet-network-download-server-arrow"} {...others} />);
}

export default Component;
