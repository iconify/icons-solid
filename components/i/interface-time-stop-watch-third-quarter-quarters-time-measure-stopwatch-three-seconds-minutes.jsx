import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsm5h63ds.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xsm5h63ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-time-stop-watch-third-quarter-quarters-time-measure-stopwatch-three-seconds-minutes"} {...others} />);
}

export default Component;
