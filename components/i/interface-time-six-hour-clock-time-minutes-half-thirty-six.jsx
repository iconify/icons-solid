import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhd5bpl-u.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yhd5bpl-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-time-six-hour-clock-time-minutes-half-thirty-six"} {...others} />);
}

export default Component;
