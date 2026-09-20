import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7r-9rbzo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j7r-9rbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:send-left-outline"} {...others} />);
}

export default Component;
