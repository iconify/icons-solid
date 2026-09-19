import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0reff-sv.css';

const viewBox = {"width":504,"height":512};
const content = `<path class="v0reff-sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:kiss-wink-heart"} {...others} />);
}

export default Component;
