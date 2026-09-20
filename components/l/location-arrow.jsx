import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpn0pzs8j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fpn0pzs8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:location-arrow"} {...others} />);
}

export default Component;
