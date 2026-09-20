import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-_punbps.css';
import '../../css/q/q8b3x8beh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h-_punbps"/><path class="q8b3x8beh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:rotate-clockwise-16"} {...others} />);
}

export default Component;
