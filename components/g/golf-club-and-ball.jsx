import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le12s8byy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="le12s8byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:golf-club-and-ball"} {...others} />);
}

export default Component;
