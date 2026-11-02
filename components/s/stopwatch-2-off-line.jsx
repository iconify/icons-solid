import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5b7xl8wn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5b7xl8wn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:stopwatch-2-off-line"} {...others} />);
}

export default Component;
