import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2u6px6tw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q2u6px6tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:thermometer-full-solid"} {...others} />);
}

export default Component;
