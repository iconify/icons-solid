import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm-1pkbwz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wm-1pkbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:counterclockwise"} {...others} />);
}

export default Component;
