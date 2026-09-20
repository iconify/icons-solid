import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-j8klbqk.css';

const viewBox = {"width":1534,"height":1536};
const content = `<path class="i-j8klbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:wind-direction-ne"} {...others} />);
}

export default Component;
