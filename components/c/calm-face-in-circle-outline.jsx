import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywztcab3i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ywztcab3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:calm-face-in-circle-outline"} {...others} />);
}

export default Component;
