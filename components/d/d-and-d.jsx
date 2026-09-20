import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0fn58bgb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w0fn58bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:d-and-d"} {...others} />);
}

export default Component;
