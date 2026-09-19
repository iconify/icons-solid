import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcmqf6bpa.css';

const viewBox = {"width":666,"height":680};
const content = `<path class="jcmqf6bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:dailycalendar"} {...others} />);
}

export default Component;
