import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guyv63blm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="guyv63blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-time-stop-watch-quarter-time-fifteen-quarter-stopwatch-minute-measure-seconds"} {...others} />);
}

export default Component;
