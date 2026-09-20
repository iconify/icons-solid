import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1erivbae.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h1erivbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-time-stop-watch-half-quarter-seconds-thirty-hour-half-measure-time-stopwatch"} {...others} />);
}

export default Component;
