import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5-sh3vvp.css';
import '../../css/j/joigvlfvo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z5-sh3vvp"/><path class="joigvlfvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:uranium-48"} {...others} />);
}

export default Component;
