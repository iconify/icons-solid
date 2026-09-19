import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryrcvob7h.css';

const viewBox = {"width":417,"height":512};
const content = `<path class="ryrcvob7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:stylishhaskell"} {...others} />);
}

export default Component;
