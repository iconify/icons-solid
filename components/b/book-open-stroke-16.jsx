import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y04prtbue.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y04prtbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:book-open-stroke-16"} {...others} />);
}

export default Component;
