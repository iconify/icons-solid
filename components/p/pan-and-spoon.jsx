import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzoz0rb9n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dzoz0rb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:pan-and-spoon"} {...others} />);
}

export default Component;
