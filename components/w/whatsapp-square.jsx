import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohn5t9b4u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ohn5t9b4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:whatsapp-square"} {...others} />);
}

export default Component;
