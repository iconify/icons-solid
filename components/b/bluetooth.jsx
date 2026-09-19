import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd3h-8q2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jd3h-8q2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:bluetooth"} {...others} />);
}

export default Component;
