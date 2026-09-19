import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4e15yayf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n4e15yayf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:kiosk-device"} {...others} />);
}

export default Component;
