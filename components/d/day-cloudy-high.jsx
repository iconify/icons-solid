import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aays3xbed.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="aays3xbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:day-cloudy-high"} {...others} />);
}

export default Component;
