import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg-7rz3eq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yg-7rz3eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:apartments-3-story-skillion-roof"} {...others} />);
}

export default Component;
