import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p678uh31n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p678uh31n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:apartments-3-story-gabled-roof"} {...others} />);
}

export default Component;
