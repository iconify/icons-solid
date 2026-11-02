import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h34n85n7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h34n85n7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:stopwatch-line"} {...others} />);
}

export default Component;
