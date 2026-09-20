import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmgzy2b3e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tmgzy2b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:nature-cloudy"} {...others} />);
}

export default Component;
