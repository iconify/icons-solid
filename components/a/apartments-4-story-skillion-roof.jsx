import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr6emiboa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rr6emiboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:apartments-4-story-skillion-roof"} {...others} />);
}

export default Component;
