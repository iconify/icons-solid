import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8j3ojtso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r8j3ojtso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:stopwatch-play-outline"} {...others} />);
}

export default Component;
