import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx9b28b0k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rx9b28b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:map-pin-with-dot"} {...others} />);
}

export default Component;
