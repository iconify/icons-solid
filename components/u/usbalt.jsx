import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3soo0q4e.css';

const viewBox = {"width":961,"height":1024};
const content = `<path class="c3soo0q4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:usbalt"} {...others} />);
}

export default Component;
