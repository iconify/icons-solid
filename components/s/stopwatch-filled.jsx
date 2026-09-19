import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le8sjw5jh.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="le8sjw5jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:stopwatch-filled"} {...others} />);
}

export default Component;
