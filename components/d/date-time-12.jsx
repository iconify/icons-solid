import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2sb3hbuu.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="v2sb3hbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:date-time-12"} {...others} />);
}

export default Component;
