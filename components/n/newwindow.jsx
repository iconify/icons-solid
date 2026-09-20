import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtmml6b4e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dtmml6b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:newwindow"} {...others} />);
}

export default Component;
