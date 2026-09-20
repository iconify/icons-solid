import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1v0-0b8q.css';
import '../../css/w/wlj0jptgl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y1v0-0b8q"/><path class="wlj0jptgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-call-center-contact-help"} {...others} />);
}

export default Component;
